+++
date = '2026-07-19T13:27:20-05:00'
draft = false
title = '¿Qué es Workforce Management?'
series= ["WFM-Essentials-ES"]
series_order= 1
+++


<div style="text-align: justify;">

## WFM en acción 😎
Imaginemos que inicias un negocio. Un E-commerce, por ejemplo.

Al principio, todo parece sencillo. Tu principal preocupación son las ventas: conseguir clientes, vender tus productos y hacer crecer el negocio.

Pasan los años. El negocio crece y, con él, también crecen las consultas sobre:

* Un producto defectuoso.
* Un pedido que no ha llegado.
* Una duda sobre el precio.
* Un problema con una cuenta.
* Una solicitud de devolución.
  
Ya no puedes atenderlas todas tú solo. Es imposible. Necesitas contratar personas que se encarguen de atender todas estas interacciones.

Ahí es, como decimos en mi tierra, donde la puerca tuerce el rabo. Aparecen nuevas preguntas:

* ¿Cuántas personas necesito contratar?
* ¿Cuántas personas deben trabajar cada día?
* ¿Qué horarios deberían tener?
* ¿Qué ocurre si muchas personas se ausentan el mismo día?
* ¿Debería ofrecer atención al cliente durante todo el día?
* ¿Cuál debería ser mi horario de atención?

¡Dios, qué estresante!—Dirías con seguridad.

Pero tú tranquilo: nosotros nerviosos. Aquí es donde entra Workforce Management, o WFM.

>WFM combina datos, forecasting, planificación, scheduling, monitoreo y análisis de desempeño para responder preguntas como estas.

De forma sencilla, podríamos decir que WFM es el área encargada de garantizar:
>Las personas adecuadas, con las habilidades adecuadas, en el momento adecuado.

Y todo esto intentando equilibrar dos objetivos que a menudo compiten entre sí: ofrecer una buena experiencia al cliente y mantener bajo control los costos operativos.
En otras palabras, WFM intenta ayudar a una operación a utilizar sus recursos de la manera más eficiente posible.

___
## El ciclo de WFM 🌀

Dicho equilibrio se consigue mediante un marco de trabajo, que se suele conocer como “El ciclo de WFM”.

Dependiendo de la organización, el ciclo de WFM puede dividirse de diferentes maneras. Sin embargo, una forma sencilla de entenderlo es:  

### 1. Forecasting 📈

¿Cuántas consultas esperamos recibir durante nuestro horizonte de planificación? 
Por ejemplo:
¿Cuántas llamadas recibiremos el próximo mes?
¿Cuántos chats recibiremos la próxima semana?
¿Cuántos contactos esperamos recibir el próximo lunes entre las 10:00 y las 11:00?
El objetivo es estimar la cantidad de consultas futuras. Llamémoslo volumen, para usar un término más universal.
 En esta etapa se suelen emplear métodos estadísticos, como el ARIMA, por ejemplo.  

### 2. Capacity Planning 🧮

Bien. Ya tenemos una estimación del volumen esperado. ¿Ahora qué?

Con este input, podemos responder las siguientes preguntas:
¿Cuánto personal necesitamos para atenderlo?
¿Necesitamos contratar?
¿Podremos dar tiempo para feedback, entrenamientos?
¿Cuántas vacaciones negamos? ¿Por qué tan pocas?
¿Unos cuantos despidos o miedo?

Estas dos últimas son broma. Tenemos fama de ser crueles y sin corazón, pero sabemos que trabajamos con humanos y —para sorpresa de mi niño interior—  algunas máquinas virtuales (o agentes virtuales, para actualizar el término y humanizarlo más). 

### 3. Scheduling 📅

Ahora sabemos cuántas personas necesitamos.
La siguiente pregunta es:

* ¿Cuándo deben trabajar?
* ¿En qué franjas se necesitan más horas de trabajo?
 
Respondido lo anterior, se diseñan los horarios y turnos de trabajo para cubrir el volumen esperado considerando factores como:

* Disponibilidad de los empleados. 
* Contratos y jornadas laborales.
* Disposiciones legales del lugar de operación.
* Días libres, vacaciones, restricciones individuales.
* Peticiones especiales.

¿Ven? No somos monstruos desalmados (Muchos en WFM vienen de ser agentes también, y las raíces no se suelen olvidar).
En esta etapa se suelen emplear herramientas como Erlang C, simulación y motores de optimización. Incluso, plantillas de Excel para operaciones sencillas o estables. 

### 4. Real Time 📞💬📧

Veamos cuántos pares son tres moscas. Llegó el día pronosticado y planificado.

Pero como suele ocurrir, la realidad no siempre respeta nuestros pronósticos. De eso tan bueno no dan tanto.

En esta parte solemos preguntarnos lo siguiente: 

* ¿Qué está ocurriendo? 
* ¿El volumen es mayor de lo esperado? 
* ¿Hay más ausencias de las previstas? 
* ¿Necesitamos realizar algún ajuste operativo? 
* ¿Hay breaks o almuerzos que deben programarse? 
* ¿Entramos en pánico o todo está bien con el SLA?
* ¿Coaching qué cancelar?¿Concurrencias por aumentar?

En esta parte del ciclo, es donde pasamos de la planificación a la acción. Debemos controlar los principales indicadores, como el SLA: El porcentaje de contactos atendidos antes de cierto tiempo, por ejemplo, 30 segundos.


### 5. Performance Analysis 🚀

Ya pasó el gran día D. Es tiempo de ver en retrospectiva y responder algunas preguntas como:

* ¿Qué salió bien? ¿Qué salió mal?
* ¿Nuestro forecast fue preciso?¿Es necesario proyectar nuevamente el volumen?
* ¿Tuvimos suficiente capacidad?
* ¿Los horarios estaban correctamente diseñados?
* ¿Qué podemos mejorar para el siguiente ciclo?

Y entonces, inevitablemente, volvemos al principio. Por eso hablamos de un ciclo.
___
## Ejemplo práctico 💪

Despues de analizar los datos del último año, nuestro forecast nos indica que recibiremos 20.000 consultas en nuestro E-commerce la próxima semana.

Los datos de los últimos tres meses indican que, en promedio, los agentes tardan unos 340 segundos en gestionar cada consulta. 

El siguiente cálculo sencillo nos indicará la cantidad de horas minimas de trabajo necesarias para atender el volumen esperado:

{{< katex >}}

<div class="caja-oscura">
$$
    \begin{split}
         20.000\hspace{3pt} \cancel{consultas} * \frac{340 \hspace{3pt} \cancel{segundos}} { \cancel{consultas} } * \frac {1 \hspace{3pt}hora}{3.600 \hspace{3pt}\cancel{segundos}} \\
        \\ 
        = 1.888,89 \hspace{3pt} horas \hspace{3pt} de \hspace{3pt} producción
    \end{split} 
$$
</div>

Tu _**E-commerce**_ opera en un país de LATAM en el que la jornada laboral legal es de 40 horas semanales. Por tanto:

<div class="caja-oscura">
$$
    \begin{split}
     \frac{1.888,89 \hspace{3pt} \cancel{horas}}{\dfrac{40 \hspace{3pt} \cancel{horas}}{empleados}} = 47,22 \hspace{3pt} empleados  \approx 48 \hspace{3pt} empleados
    \end{split} 
$$ 
</div>

Asumiendo, de forma irreal, que un empleado se dedica el 100% de su tiempo contractual a atender contactos, necesitaríamos 48 empleados [^1], como mínimo, para cubrir el volumen de esa semana.

>En una operación real, el resultado será mayor.

Necesitaremos más horas de las calculadas anteriormente, pues, de esas 40 horas semanales, hay que descontar el tiempo de pausas activas, breaks, enfermedad, permisos, vacaciones, reuniones, entrenamiento y otras actividades no productivas. 

¡Vaya! En apenas unas líneas acabamos de utilizar varios conceptos fundamentales de WFM: **Volumen, AHT, Transactional Hours, FTE y Shrinkage**.

Con esto ya eres todo un miembro de WFM, y puedes entrar a la acción.

En el siguiente post de esta serie: **WFM Essentials**, veremos algunas definiciones básicas de WFM.

[^1]: Empleados a tiempo completo
</div>