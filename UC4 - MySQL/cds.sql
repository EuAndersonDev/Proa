create database db_cds;
USE db_cds;

CREATE TABLE Artista (
	Cod_Art INT AUTO_INCREMENT PRIMARY KEY,
	Nome_Art VARCHAR (100) NOT NULL UNIQUE
);

CREATE TABLE Gravadora (
	Cod_grav INT AUTO_INCREMENT PRIMARY KEY,
    Nome_grav VARCHAR (50) NOT NULL UNIQUE
);

CREATE TABLE Categoria (
	Cod_cat INT AUTO_INCREMENT PRIMARY KEY,
    Nome_cat VARCHAR (50) NOT NULL UNIQUE
);

CREATE TABLE Estado (
	Sigla_Est CHAR (2) PRIMARY KEY,
    Nome_Est CHAR (50) NOT NULL UNIQUE
);

CREATE TABLE Cidade (
	Cod_Cid INT AUTO_INCREMENT PRIMARY KEY,
    Sigla_Est CHAR(2) NOT NULL,
    Nome_Cid VARCHAR (100) NOT NULL UNIQUE
);

CREATE TABLE Cliente (
	Cod_Cli INT AUTO_INCREMENT PRIMARY KEY,
    Cod_Cid INT NOT NULL,
    Nome_Cli VARCHAR (100) NOT NULL,
    End_Cli VARCHAR (200) NOT NULL,
    Renda_Cli DECIMAL (10,2) NOT NULL DEFAULT 0,
    Sexo_Cli ENUM ('F', 'M') DEFAULT 'F'
);

CREATE TABLE Conjuge (
	Cod_Cli INT PRIMARY KEY,
    Nome_Conj VARCHAR(100) NOT NULL,
    Renda_Conj DECIMAL (10,2) NOT NULL,
    Sexo_Conj ENUM ('F', 'M') DEFAULT 'F'
);

CREATE TABLE Funcionario (
	Cod_Func INT AUTO_INCREMENT PRIMARY KEY,
    Nome_Func VARCHAR (100) NOT NULL,
    End_Func VARCHAR (200) NOT NULL,
    Sal_Func DECIMAL(10,2) NOT NULL,
    Sexo_Func ENUM ('F', 'M') DEFAULT 'F'
);

CREATE TABLE Dependente (
	Cod_Dep INT AUTO_INCREMENT PRIMARY KEY,
    Cod_Func INT,
    Nome_Dep VARCHAR (100) NOT NULL,
    Sexo_Dep ENUM ('F', 'M') DEFAULT 'F'
);

CREATE TABLE Titulo (
    Cod_Tit INT AUTO_INCREMENT PRIMARY KEY,
    Cod_Cat INT,
    Cod_Grav INT,
    Nome_CD VARCHAR(100) NOT NULL UNIQUE,
    Val_CD DECIMAL(10,2) NOT NULL,
    Qtd_Estq INT NOT NULL CHECK (Qtd_Estq >= 1)
);

CREATE TABLE Pedido (
	Num_Ped INT AUTO_INCREMENT PRIMARY KEY,
    Cod_Cli INT,
    Cod_Func INT,
    Data_Ped DATETIME NOT NULL,
    Val_Ped DECIMAL (10,2) NOT NULL CHECK (Val_Ped >= 0)
);

CREATE TABLE Titulo_Pedido (
    Num_Ped INT NOT NULL,
    Cod_Tit INT NOT NULL,
    Qtd_CD INT NOT NULL CHECK (Qtd_CD >= 1),
    Val_CD DECIMAL(10,2) NOT NULL CHECK (Val_CD > 0),
    PRIMARY KEY (Num_Ped, Cod_Tit)
);

CREATE TABLE Titulo_Artista (
    Cod_Tit INT NOT NULL,
    Cod_Art INT NOT NULL,
    PRIMARY KEY (Cod_Tit, Cod_Art)
);
