---
date: 2020-10-14 22:27
title: KRR - Knowledge representation and reasoning
description: First blog post
tags:
  - tech
---

## Ontologia

Aristóteles sonhava em criar uma Barça contendo todo o conhecimento do mundo de forma organizada, o que se mostrou ser uma tarefa muito difícil tendo em vista a barreira de culturas, linguagens e crenças. No entanto essa tentativa não foi de todo em vão, desenvolveu-se a partir dela a **estruturação do conhecimento de forma hierárquica**.

Organização de classificação do conhecimento através de categorização.

## Ontologias

Ontologia aplicada a computação.

> "_Uma especificação formal de explícita de uma conceitualização compartilhada." Gruber_

- Explícito - representação daquilo que eu entendo sobre algum domínio para poder comunicar
- Representação formal - linguagem e raciocínio
- Conceitualização - modelo (Ex: o domínio floresta apresentaria o conceito de plantas, animais....)
- Visão compartilhada - consenso e divergências

### Aplicação

- Web semântica
- Gene ontology

## Ontologia Computacional

Utilizando o Protégé é possível criar uma ontologia computacionalmente compreensível.

### Classes

Representam entidades a serem representadadas.

- Animal
  - Cachorro
  - Gato
- Pessoa

**Class Expressions**

- equivalentTo
- subClassOf
- disjoint

### Atributos

Representam as relações e existem independentes das classes.

- Pertence a
- Tem um
- Come
- Comido por

### Indivíduos

Instâncias das classes.

### Restrições

Limitação de conceitos que formam um novo conceito.

- Garrafa térmica - classe garrafa que não deixa o calor sair

## 🦉 Ontologias OWL - Ontology Web Language

Padronização de ontologia através de **lógica descritiva**.

### T - Box

Terminologia

- Classes
- Relações
  - Object property - relação entre objetos
  - Data property - relação entre objeto e dado

### A - Box

Asserções

- Indivíduos
