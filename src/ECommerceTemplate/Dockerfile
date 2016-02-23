FROM microsoft/aspnet:1.0.0-rc1-final

ADD . /app
WORKDIR /app/approot/src/WebApplication5
RUN ["dnu", "restore"]

EXPOSE 5000
ENTRYPOINT ["dnx", "web"]	