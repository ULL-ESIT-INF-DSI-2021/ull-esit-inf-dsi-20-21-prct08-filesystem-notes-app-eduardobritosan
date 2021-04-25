## Introducción

Empezando la segunda parte de la asignatura, se trabajará con la API de Node.js, en concreto con el gestor del sistema de ficheros, es decir, la libreria _fs_.

## Objetivos

- Leer documentación de chalk, yargs y fs.
- Hacer uso de los pull requests de GitHub.
- Repasar los principios SOLID.
- Escribir pruebas para cada ejercicio.
- Resolver los ejercicios propuestos.
- Mantenerse dentro del ámbito de las soluciones propuestas (no utilizar elementos del lenguaje todavia no impartidos en clase).
- Elaborar un informe que explique lo realizado.
- Documentar los ejercicios.

## Diseño previo

Se optó por un diseño sencillo, para poder centrarnos en el trabajo con fs. En este caso, se implemento una clase Notes que siguiera el patron singleton, teniendo en cuenta que no surgiría la necesidad de instanciar la clase en mas de una ocasión.

Una potencial mejora de diseño seria desvincular toda la operatoria de las notas con la operatoria de almacenamiento en ficheros.

## Implementacion de clases base, testing

Para la implementación, se siguió la metodología TDD, diseñando los tests, prediciendo el comportamiento de las clases previo a su desarrollo. Un ejemplo de los tests diseñados sería:

![Tests](img/tests-example.png)

![Tests yargs](img/yargs-tests.png)

Algo curioso es que los tests para yargs no pasan en la github action, a pesar de que si funcionan correctamente en local.

La implementación del diseño de clases fue sencillo, tras lo comentado anteriormente, en donde solo tenemos dos ficheros de fuente: notes.ts y note-app.ts

![Note methods](img/note-class.png)

_Métodos de ejemplo en la clase Notes_

## Integracion continua

Para cumplir con los requisitos del guión, se configuraron Coveralls y SonarCloud a través de GitHub Actions. Tambien se configuró una acción que ejecuta los tests en dos versiones de Node.js (Las versiones 10.x y 12.x no reconocen los metodos de fs).

Finalmente, tras acabar de configurar todo lo necesario para que se lanzen correctamente las acciones de Github, nuestro repositorio tiene un aspecto similar al siguiente: 

![Badges](img/badges.png)

El bajo nivel de cubrimiento y consecuentemente el quality gate failing vienen de la imposibilidad de pasar los tests de yargs en la github action, obligandonos a comentarlos para obetener la badge de que los tests pasan.

## Conclusiones

Durante el desarrollo, la fase del diseño de clases fue la mas sencilla, teniendo en cuenta como se ha practicado esto en las prácticas anteriores. La mayor complicacion fue la aplicacion de las distintas herramientas de integracion continua con un poryecto de tipo cli, que fue donde se encontro mayor reto. Por otra parte, conseguir soluciones de testing mientras se utilizaba chalk tambien resulto interesante.
## Bibliografía

SOLID principles using TypeScript (s.f.). En _SamuelEresca.net_. Recuperado el 13 de marzo de 2021 de https://samueleresca.net/solid-principles-using-typescript/

