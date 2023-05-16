import { ConfigService } from '@nestjs/config';
import {
  Update,
  Start,
  Ctx,
  Command,
  InjectBot,
  On,
  Message,
} from 'nestjs-telegraf';
import { Telegraf, Scenes } from 'telegraf';
import { BooksService } from '../books/books.service';
import { getBookStringTemplate } from '../books/utils/get-book-string.template';
import { Logger } from '@nestjs/common';
import { SceneSessionData } from 'telegraf/typings/scenes/context';
import { InputParser } from './utils/input-parser';
import { InputValidation } from './validation/input-validation';

interface Context extends Scenes.SceneContext {
  session: {
    __scenes: SceneSessionData;
    type?: 'create' | 'update' | 'remove' | 'wait' | 'get-one';
  };
}

@Update()
export class TelegramService {
  constructor(
    @InjectBot() private readonly bot: Telegraf<Context>,
    private readonly configService: ConfigService,
    private readonly bookService: BooksService,
  ) {}

  @Start()
  async onStart(@Ctx() ctx: Context) {
    await ctx.replyWithHTML(
      `Hello, <b>${ctx.from.username}</b> This is book bot, please use menu or site`,
    );
    ctx.session.type = 'wait';
  }

  @Command('site')
  async onSiteCommand(@Ctx() ctx: Context) {
    await ctx.reply('t.me/skrip_book_bot/site');
  }

  @Command('get')
  async onGetCommand(@Ctx() ctx: Context) {
    ctx.session.type = 'wait';
    try {
      const { getAllBooks: books } = await this.bookService.getAllBooks();

      if (books.length) {
        await ctx.replyWithHTML(
          `${books
            .map(
              (book, index) =>
                `Book-${index}\n ${getBookStringTemplate(book)} \n`,
            )
            .join('\n')}`,
        );
      } else {
        await ctx.replyWithHTML(
          `There are no books yet, you can create them by clicking on the /create button in the menu`,
        );
      }
    } catch (e) {
      Logger.error(e);
      await ctx.replyWithHTML(`<b> Sorry, something was wrong, try later </b>`);
    }
  }

  @Command('book')
  async onBookCommand(@Ctx() ctx: Context) {
    ctx.session.type = 'get-one';
    await ctx.replyWithHTML('Please input ID of book what u want to see');
  }

  @Command('create')
  async onCreateCommand(@Ctx() ctx: Context) {
    ctx.session.type = 'create';
    await ctx.replyWithHTML(`
      <b>Please input Name, Author and Description of the book</b>\n
      
      in format like \n
      
      Book-name, Author , Description \n      
    `);
  }

  @Command('remove')
  async onRemoveCommand(@Ctx() ctx: Context) {
    ctx.session.type = 'remove';
    await ctx.replyWithHTML(`
      <b>Please input ID of book, what u want to delete</b>\n   
    `);
  }

  @Command('update')
  async onUpdateCommand(@Ctx() ctx: Context) {
    ctx.session.type = 'update';

    await ctx.replyWithHTML(`
      <b>Please input ID, Name, Author and Description of the book</b>\n
      
      in format like \n
      
      Book-ID,Book-name,Author,Description \n      
    `);
  }

  @On('text')
  async onMessages(@Message('text') message: string, @Ctx() ctx: Context) {
    if (!ctx.session.type) {
      ctx.session.type = 'wait';
    }

    console.log(ctx.session.type);

    switch (ctx.session.type) {
      case 'wait': {
        await ctx.reply('Choose your operation from menu');
        break;
      }
      case 'get-one': {
        await this.onGetOneType(ctx, message);
        break;
      }
      case 'create': {
        await this.onCreateType(ctx, message);
        break;
      }

      case 'remove': {
        await this.onDeleteType(ctx, message);
        break;
      }

      case 'update': {
        await this.onUpdateType(ctx, message);
        break;
      }

      default: {
        return false;
      }
    }
  }

  async onGetOneType(ctx: Context, id: string) {
    try {
      const { getOneBook: book } = await this.bookService.getOneBook(id);

      await ctx.reply(getBookStringTemplate(book));
    } catch (e) {
      Logger.error(e);

      await ctx.reply('Incorrect ID, try one of ids from books list');
    }

    ctx.session.type = 'wait';
  }
  async onCreateType(ctx: Context, message: string) {
    const parsedText = InputParser.createParse(message);
    const { isValid, errors } = InputValidation.createValidation(parsedText);

    if (isValid) {
      try {
        const { createBook: newBook } = await this.bookService.createBook(
          parsedText,
        );

        await ctx.reply(getBookStringTemplate(newBook));
      } catch (e) {
        await ctx.reply('Something was wrong, try latter');
      }
    } else {
      await ctx.replyWithHTML(`${errors.join(', ')}`);
    }

    ctx.session.type = 'wait';
  }

  async onDeleteType(ctx: Context, id: string) {
    try {
      const { getOneBook: currentBook } = await this.bookService.getOneBook(id);

      if (!currentBook) {
        await ctx.reply('Incorrect ID, try one of ids from books list');
        return;
      }
      try {
        const { removeBook: deletedID } = await this.bookService.removeBook(id);

        await ctx.reply(`U delete book with ID ${deletedID}`);
      } catch (e) {
        await ctx.reply('Something was wrong, try latter');
      }
    } catch (e) {
      await ctx.reply('Incorrect ID, try one of ids from books list');
    } finally {
      ctx.session.type = 'wait';
    }
  }

  async onUpdateType(ctx: Context, message: string) {
    const parsedText = InputParser.updateParse(message);

    try {
      const { getAllBooks: books } = await this.bookService.getAllBooks();

      const { isValid, errors } = InputValidation.updateValidation(
        parsedText,
        books,
      );

      if (isValid) {
        try {
          const { updateBook: newBook } = await this.bookService.updateBook(
            parsedText,
          );

          await ctx.reply(getBookStringTemplate(newBook));
        } catch (e) {
          await ctx.reply('Something was wrong, try latter');
        }
      } else {
        await ctx.replyWithHTML(`${errors.join(', ')}`);
      }
    } catch (e) {
      await ctx.reply('Something was wrong, try latter');
    } finally {
      ctx.session.type = 'wait';
    }
  }
}
