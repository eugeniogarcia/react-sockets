# Instalacion

```ps
npm init next-app react-socket
```

```ps
npm i express socket.io
```

# Servidor

Vamos a arrancar el servidor con powershell en background. El directorio de trabajo para los jobs que se ejecutan en background es el `home` del usuario, por esto vamos a especificar la ruta absoluta donde podremos encontrar nuestro servidor. Guardamos en una variable la ruta actual:

```ps
$r=Get-Location
```

Arrancamos el job. Le pasamos como `-InputObjec` nuestra ruta. Lo que informemos en este argumento estara disponible en la variable de entorno `input`:

```ps
Start-Job  -name SocketServer -ScriptBlock {node $input\servidor.js} -InputObjec $r
```

En este caso le hemos puesto un nombre al job. Nos podremos referir a él con este nombre, o con el id. Veamos la salida del job:

```ps
Receive-Job -name SocketServer

Escuchando en el puerto 4001
```

Para para el job:

```ps
stop-Job -name SocketServer
```
