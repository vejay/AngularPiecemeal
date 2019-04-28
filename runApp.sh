#!/bin/sh

./gradlew --console=plain buildWar -x test

cp build/libs/NonAngularAsMain-0.0.1-SNAPSHOT.war ~/Documents/apache-tomcat-8.5.11/webapps/ROOT.war
cd ~/Documents/apache-tomcat-8.5.11/bin
./shutdown.sh;
./startup.sh
