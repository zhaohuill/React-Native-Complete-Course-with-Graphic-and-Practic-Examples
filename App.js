/**+-CURSO BÁSICO COMPLETO DE REACT NATIVE:_ +-PREREQUISIROS:_ Saber Como Mínimo Javascript y React.js Hooks en su Última Versión así como también el Administrador de Paquetes NPM.
 * +-En Mi Curso de React.js 16 HOOKS ( React.js 16 and Redux Complete Courses with Graphic and Practic Examples ) ya se Explican los Conceptos Básicos de React.js y sus Componentes, JSX y
 * React.js Hooks que NO serán cubiertos en este Curso ya que son Prerequisitos a tener para poder Aprender React-Native.
 * +-En este Curso Vamos a crear una sencilla Mobile App de Ecommerce llamada "DoneWithIt"(Cansado de Esto) para Vender/Comprar cosas que ya no Usamos.
 *
 * +-Una Vez Configurado el Entorno de Desarrollo:_
 * ( https://reactnative.dev/docs/environment-setup ) ( https://www.youtube.com/watch?v=0-S5a0eXPoc )
 *
 * +-Proseguir Con:_
 * +-(1)-COMENZAR UN PROYECTO EN REACT NATIVE:_Para Comenzar un Proyecto de React Native, se debe abrir VS CODE y en una Nueva Terminal escribir el Comando "expo init *ProyectName*" y después
 * seleccionar con las Flechas del Teclado y ENTER la Template(Platilla) de Mobile App que se desee usar, con lo cual se procederá a crear los Archivos Básicos Necesarios de la App.*/

/**+-(2)-CONSTRUIR Y PROBAR NUESTRA APLICACIÓN:_ Para poder lanzar Nuestra Mobile App de React-Native ejecutamos en una Nueva Terminal el Comando "npm start"(Al igual con React.js y Node.js) y
 * se va a abrir una Nueva Ventana en nuestro Navegador Predeterminado con el Nombre de Nuestro Proyecto donde a través de la herramienta Metro Bundler podremos elegir de qué forma probar
 * nuestra Mobile App(Ya sea en IOS con un Emulador con Xcode https://developer.apple.com/xcode/ o en un Emulador de Android que ya deberíamos tener Abierto; o si nó en Un Dispositivo conectado
 *  a Nuestra PC).*/

/**+-(4)-PUBLICAR LA MOBILE APP PARA PREVISUALIZACIÓN:_ Para que Durante SÓLO el Desarrollo y Testeo de la App (NO Producción) cualquiera pueda ver Nuestra App, podemos Subirla y Publicarla con
 * la opción "Publish or republish project…" en nuestra Nueva Ventana del Navegador Predeterminado donde está abierta la herramienta Metro Bundler.*/

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  /**+-(3)-DEBUGGEAR:_Una de las formas más simples de Encontrar y Correguir los Posibles Errores(Bugs) en Nuestra Aplicación es usando los "console.log(***);" siempre que sea oportuno para
   * corroborar el Correcto Funcionamiento de la App, PERO RECORDAR que como en el Largo Plazo y con la App ya en Producción(Terminada y Usándose) todos los "console.log(***);" se vuelven
   * innecesarios y vuelven lenta a la App; se aconseja mantener estos "console.log(***);" SOLO durante el Desarrollo y el Testeo, y después borrarlos.*/
  console.log("App Executed");

  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
