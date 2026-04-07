# Cypress Project 1

Proyecto de automatización de pruebas con Cypress y TypeScript para validar flujos E2E y pruebas API.

## Requisitos

- Node.js 18 o superior
- npm 9 o superior
- Navegador compatible con Cypress

## Instalación del proyecto

1. Clona el repositorio.
2. Instala las dependencias:

```bash
npm install
```

Esto instalará las librerías definidas en `package.json`, incluyendo Cypress.

## Instalación de Cypress

En este proyecto Cypress ya está incluido como dependencia. Si quieres agregarlo manualmente en un proyecto nuevo, puedes usar:

```bash
npm install -D cypress
```

Para abrir la interfaz de Cypress por primera vez:

```bash
npx cypress open
```

## Scripts disponibles

- `npm run cy:open`: abre la interfaz gráfica de Cypress.
- `npm run cy:run`: ejecuta todas las pruebas en modo headless.

También puedes usar comandos directos:

```bash
npx cypress open
npx cypress run
```

## Uso del proyecto

### Ejecutar pruebas en modo interactivo

```bash
npm run cy:open
```

### Ejecutar pruebas en modo headless

```bash
npm run cy:run
```

### Ejecutar con un entorno específico

La configuración del entorno se resuelve desde `cypress.env.json` usando la propiedad `environment`.

Ejemplo para ejecutar contra `stage`:

```bash
npx cypress run --env environment=stage
```

Si no se envía ningún entorno, el proyecto usa `local` por defecto.

## Configuración de entornos

El archivo `cypress.env.json` contiene los datos por entorno:

- `local`: entorno local de desarrollo
- `stage`: entorno de pruebas o integración

Cada entorno puede definir:

- `baseUrl`
- `apiUrl`
- `email`
- `password`

La lógica de carga se encuentra en `cypress.config.ts`, donde se toma `config.env.environment` y se fusionan las variables del entorno seleccionado.

## Estructura del proyecto

```text
.
|-- cypress/
|   |-- data/                # Datos auxiliares
|   |-- downloads/           # Descargas generadas por Cypress
|   |-- e2e/
|   |   |-- api/             # Pruebas API
|   |   |-- regression/      # Casos de regresión
|   |   `-- smoke/           # Casos smoke
|   |-- fixtures/
|   |   |-- response/        # Respuestas mock
|   |   `-- users/           # Datos de usuarios para pruebas
|   `-- support/
|       |-- actions/         # Acciones reutilizables
|       |-- pages/           # Page objects
|       |-- selectors/       # Selectores centralizados
|       |-- utils/           # Utilidades y generadores
|       |-- commands.ts      # Custom commands
|       |-- cypress.d.ts     # Tipado global de Cypress
|       `-- e2e.ts           # Carga global para pruebas E2E
|-- cypress.config.ts        # Configuración principal de Cypress
|-- cypress.env.json         # Variables por entorno
|-- package.json             # Dependencias y scripts
|-- tsconfig.json            # Configuración de TypeScript
`-- README.md
```

## Organización de pruebas

- `cypress/e2e/smoke`: validaciones rápidas de navegación y login.
- `cypress/e2e/regression`: escenarios funcionales más amplios.
- `cypress/e2e/api`: validaciones de endpoints o autenticación por API.

## Custom commands

En `cypress/support/commands.ts` existe un comando personalizado:

- `cy.login()`: realiza login utilizando `email` y `password` del entorno activo.

Este comando depende de:

- `baseUrl` configurada correctamente
- credenciales válidas en `cypress.env.json`

## Instalación de librerías adicionales

### Faker

Si necesitas generar datos dinámicos para tus pruebas, instala `@faker-js/faker`:

```bash
npm install -D @faker-js/faker
```

Ejemplo de uso:

```ts
import { faker } from '@faker-js/faker';

const firstName = faker.person.firstName();
const email = faker.internet.email();
```

Puedes usar esta librería dentro de utilidades como:

- `cypress/support/utils/generators.ts`
- `fixtures` dinámicos
- fábricas de datos para pruebas E2E o API

### Grep para Cypress

Si necesitas filtrar pruebas por nombre o por tags, puedes instalar `@bahmutov/cy-grep`:

```bash
npm install -D @cypress/grep
```

Configuración básica:

1. Importa el plugin en `cypress/support/e2e.ts`:

```ts
import '@bahmutov/cy-grep';
import './commands';
```

2. Ejecuta pruebas filtrando por texto en el título:

```bash
npx cypress run --env grep=login
```

3. También puedes usar tags dentro de los tests:

```ts
it('debe iniciar sesión correctamente', { tags: '@smoke' }, () => {
  // test
});
```

4. Luego ejecutar por tag:

```bash
npx cypress run --env grepTags=@smoke
```

Casos comunes de uso:

- Ejecutar solo pruebas relacionadas con login
- Filtrar suites smoke o regression
- Reducir el alcance de ejecución durante desarrollo o debugging

### Otras librerías

Si deseas agregar otra librería de apoyo, por ejemplo una librería adicional de generación o manipulación de datos, instala el paquete con:

```bash
npm install -D nombre-del-paquete
```

Ejemplo:

```bash
npm install -D nombre-del-paquete
```

Nota: actualmente este repositorio no tiene `@faker-js/faker` ni otra librería similar instalada en `package.json`, por lo que su uso sería opcional y debe agregarse según la necesidad del proyecto.

## Flujo recomendado

1. Configurar el entorno en `cypress.env.json`.
2. Instalar dependencias con `npm install`.
3. Ejecutar `npm run cy:open` para desarrollo local.
4. Ejecutar `npm run cy:run` para validación completa.

## Observaciones

- El proyecto usa TypeScript.
- La selección de entorno es dinámica desde `cypress.config.ts`.
- Hay archivos base en `pages`, `selectors`, `actions` y `utils` que pueden seguir creciendo conforme aumente la cobertura de pruebas.

# Cypress Project 1

Proyecto de automatización de pruebas con Cypress y TypeScript para validar flujos E2E y pruebas API.

## Requisitos

- Node.js 18 o superior
- npm 9 o superior
- Navegador compatible con Cypress

## Instalación del proyecto

1. Clona el repositorio.
2. Instala las dependencias:

```bash
npm install
```

Esto instalará las librerías definidas en `package.json`, incluyendo Cypress.

## Instalación de Cypress

En este proyecto Cypress ya está incluido como dependencia. Si quieres agregarlo manualmente en un proyecto nuevo, puedes usar:

```bash
npm install -D cypress
```

Para abrir la interfaz de Cypress por primera vez:

```bash
npx cypress open
```

## Scripts disponibles

- `npm run cy:open`: abre la interfaz gráfica de Cypress.
- `npm run cy:run`: ejecuta todas las pruebas en modo headless.

También puedes usar comandos directos:

```bash
npx cypress open
npx cypress run
```

## Uso del proyecto

### Ejecutar pruebas en modo interactivo

```bash
npm run cy:open
```

### Ejecutar pruebas en modo headless

```bash
npm run cy:run
```

### Ejecutar con un entorno específico

La configuración del entorno se resuelve desde `cypress.env.json` usando la propiedad `environment`.

Ejemplo para ejecutar contra `stage`:

```bash
npx cypress run --env environment=stage
```

Si no se envía ningún entorno, el proyecto usa `local` por defecto.

## Configuración de entornos

El archivo `cypress.env.json` contiene los datos por entorno:

- `local`: entorno local de desarrollo
- `stage`: entorno de pruebas o integración

Cada entorno puede definir:

- `baseUrl`
- `apiUrl`
- `email`
- `password`

La lógica de carga se encuentra en `cypress.config.ts`, donde se toma `config.env.environment` y se fusionan las variables del entorno seleccionado.

## Estructura del proyecto

```text
.
|-- cypress/
|   |-- data/                # Datos auxiliares
|   |-- downloads/           # Descargas generadas por Cypress
|   |-- e2e/
|   |   |-- api/             # Pruebas API
|   |   |-- regression/      # Casos de regresión
|   |   `-- smoke/           # Casos smoke
|   |-- fixtures/
|   |   |-- response/        # Respuestas mock
|   |   `-- users/           # Datos de usuarios para pruebas
|   `-- support/
|       |-- actions/         # Acciones reutilizables
|       |-- pages/           # Page objects
|       |-- selectors/       # Selectores centralizados
|       |-- utils/           # Utilidades y generadores
|       |-- commands.ts      # Custom commands
|       |-- cypress.d.ts     # Tipado global de Cypress
|       `-- e2e.ts           # Carga global para pruebas E2E
|-- cypress.config.ts        # Configuración principal de Cypress
|-- cypress.env.json         # Variables por entorno
|-- package.json             # Dependencias y scripts
|-- tsconfig.json            # Configuración de TypeScript
`-- README.md
```

## Organización de pruebas

- `cypress/e2e/smoke`: validaciones rápidas de navegación y login.
- `cypress/e2e/regression`: escenarios funcionales más amplios.
- `cypress/e2e/api`: validaciones de endpoints o autenticación por API.

## Custom commands

En `cypress/support/commands.ts` existe un comando personalizado:

- `cy.login()`: realiza login utilizando `email` y `password` del entorno activo.

Este comando depende de:

- `baseUrl` configurada correctamente
- credenciales válidas en `cypress.env.json`

## Instalación de librerías adicionales

### Faker

Si necesitas generar datos dinámicos para tus pruebas, instala `@faker-js/faker`:

```bash
npm install -D @faker-js/faker
```

Ejemplo de uso:

```ts
import { faker } from '@faker-js/faker';

const firstName = faker.person.firstName();
const email = faker.internet.email();
```

Puedes usar esta librería dentro de utilidades como:

- `cypress/support/utils/generators.ts`
- `fixtures` dinámicos
- fábricas de datos para pruebas E2E o API

### Grep para Cypress

Si necesitas filtrar pruebas por nombre o por tags, puedes instalar `@bahmutov/cy-grep`:

```bash
npm install -D @cypress/grep
```

Configuración básica:

1. Importa el plugin en `cypress/support/e2e.ts`:

```ts
import '@bahmutov/cy-grep';
import './commands';
```

2. Ejecuta pruebas filtrando por texto en el título:

```bash
npx cypress run --env grep=login
```

3. También puedes usar tags dentro de los tests:

```ts
it('debe iniciar sesión correctamente', { tags: '@smoke' }, () => {
  // test
});
```

4. Luego ejecutar por tag:

```bash
npx cypress run --env grepTags=@smoke
```

Casos comunes de uso:

- Ejecutar solo pruebas relacionadas con login
- Filtrar suites smoke o regression
- Reducir el alcance de ejecución durante desarrollo o debugging

### Otras librerías

Si deseas agregar otra librería de apoyo, por ejemplo una librería adicional de generación o manipulación de datos, instala el paquete con:

```bash
npm install -D nombre-del-paquete
```

Ejemplo:

```bash
npm install -D nombre-del-paquete
```

## Filtrado de pruebas con @cypress/grep

### Instalación

```bash
npm install -D @cypress/grep
```

cypress.config.ts

```
import { defineConfig } from 'cypress'
const { plugin: cypressGrepPlugin } = require('@cypress/grep/plugin')

export default defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      cypressGrepPlugin(config)
      return config
    },
  },

  env: {
    grepFilterSpecs: true,
    grepOmitFiltered: true,
  },
})
```

cypress/support/e2e.ts

```
import { register as registerCypressGrep } from '@cypress/grep'

registerCypressGrep()
```

Uso

```
it('@smoke should login successfully', () => {
  // test
})
```

Ejecutar smoke test

```
npx cypress run --expose grep=@smoke
```