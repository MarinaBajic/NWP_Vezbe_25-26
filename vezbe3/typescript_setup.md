# Setup TypeScript

Follow the instructions below to setup **nvm** (Node Version Manager), **node**, **npm** (Node Package Manager) and **typescript compiler**.

**We will use nvm to install node and npm.**

This setup is not only for TypeScript, but also for any other projects later in the course.

## Installing nvm (Linux)

### Run the nvm installer

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash

# or

wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash
```

### Reload the shell configuration

```
source ~/.bashrc
```

### Check nvm version

```
nvm -v
```

## Installing nvm (Windows)

### Run the nvm installer

Go to this [link](https://github.com/coreybutler/nvm-windows/releases) and download the latest (we are using 1.2.2) **nvm-setup.exe** installer (it can be found under Assets).

Run the downloaded file.

### Check nvm version

```
nvm -v
```

## Installing node

We will install version **v24.14.1** of Node.

```
nvm install 24.14.1
```

### Set which version of node to use

```
nvm use 24.14.1
```

### Check node version

```
node -v
```

### Check npm version

```
npm -v
```

## Installing TypeScript

In order to be able to compile TypeScript files to JavaScript (so that we can run JavaScript files), we need to install TypeScript (globally). 
```
npm install -g typescript
```

### Check TypeScript version

``` 
tsc -v
```

### Setup TypeScript project

```
tsc --init
```
This will create a *tsconfig.json* file in the current directory. It is not necessary to run this command, but it is a good idea to have a tsconfig.json file in your project.

### Compile TypeScript file

```
tsc path/to/file.ts
```
This will generate a JavaScript file with the same name as the TypeScript file in the same directory.

### Run JavaScript file

We can use **node** to run the JavaScript file.

``` 
node path/to/file.js
```

### Install ts-node

**ts-node** is a TypeScript interpreter. It will compile and run TypeScript files, so that we don't have to compile them to JavaScript first.

```
npm install -g ts-node
```

### Run TypeScript file

```
ts-node path/to/file.ts
```
