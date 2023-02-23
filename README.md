![poster](./poster.png)

# Solaris

En webbplats byggd med HTML, CSS & vanilla JS om vårt solsystem.

## UI

Förslag på UI hittar ni [här](https://www.figma.com/file/Snw8n1gba7Mbk6TCLEAB1A/JS-%2F-Solaris?node-id=0%3A1).

## API

**Base URL**

```
[https://majazocom.github.io/Data/solaris.json](https://majazocom.github.io/Data/solaris.json)
```

**Methods**
|enpoint|method|desc|
|---|---|---|
|/keys|POST|returnerar en API nyckel.|
|/bodies|GET|returnerar alla stora himlakroppar i vårt solsystem.|

**Authentication**

API:et är låst med en API-nyckel. Alla GET-request utan en sådan kommer generar en `401`.

För att få läsrättigheter måste du i din request bifoga headern `x-zocom` med en giltig API-nyckel.
