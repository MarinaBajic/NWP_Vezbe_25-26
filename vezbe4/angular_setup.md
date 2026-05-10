# Angular Setup

In order to setup Angular it is *strongly* recommended to use **nvm**, for better version management. Via nvm you need to install **node** and **npm** (Node Package Manager).

**If you already have nvm, node and npm installed then you are all set. If not, then please follow the instructions in [this](../vezbe3/typescript_setup.md) guide before seting up Angular.**


## Installing Angular CLI

In order to setup Angular we will use **Angular CLI**. Angular CLI is a command line tool that helps us create, build and test Angular applications.

### Activate node version

Before installing Angular CLI we need to activate the node version that we want to use.

We will use version 24.14.1 of node.

```bash
nvm use 24.14.1
```

You can check which version of node you are using by running:

```bash
node -v
```

and for npm:

```bash
npm -v
```

### Install Angular CLI

We will install and use **Angular version 21**.

```bash
npm install -g @angular/cli@21
```

For checking all available commands run:

```bash
ng help
```

### Check Angular CLI version
```bash
ng version
```

## Creating Angular project

```bash
ng new my-project
```

Make sure for now to set the following options:

```
? Which stylesheet system would you like to use? CSS
? Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? No
? Which AI tools do you want to configure with Angular best practices? None

```

This should create a new folder called *my-project* with all the necessary files and folders inside it.

### Running Angular project

To run Angular project in development mode, *go to the project folder* and run:
```bash
ng serve
```
This will start a development server on port 4200. You can access the application by going to http://localhost:4200 address in any browser.
While the server is running the application will automatically reload if you change any of the source files

### Stopping Angular project

To stop running an Angular project press **Ctrl+C** in the terminal

## Creating Angular components

In order to create a new **component**, go to the root directory of the project (my-project) and run:

```bash
ng generate component my-component
```

This will create a new folder called **my-component** inside the **my-project/src/app** folder and it will create 4 files:

- my-component.css
- my-component.html
- my-component.spec.ts
- my-component.ts

## Creating Angular classes

In order to create a new **class** called *my-class* inside a directory named **model** (so that the code is clean), go to the root directory of the project and run:

```bash
ng generate class model/my-class
```