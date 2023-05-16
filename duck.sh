#!/bin/bash
current=""
while true; do
	latest=`ec2-metadata --public-ipv4`
	echo "public-ipv4=$latest"
	if [ "$current" == "$latest" ]
	then
		echo "ip not changed"
	else
		echo "ip has changed - updating"
		current=$latest
		echo url="https://www.duckdns.org/update?domains=skrip-gql.duckdns.org&token=b1b4cbdf-4f5b-4b6b-aa60-2df306c332f8&ip=" | curl -k -o ~/duckdns/duck.log -K -
	fi
	sleep 5m
done