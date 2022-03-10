# Shipment Server

## Overview
This is a bare-bones vanilla Node.js server module without the use of any frameworks. No NPM is used to avoid any third party libraries usage and thus minimal abstraction. It helps to focus on the core  funtionalities of server using bare minimum Node.js modules. 

## Goal
The primary goal of the server is to expose API interfaces using pure Node.js without external libraries or frameworks. The functions and methods aim to achieve the following for:
* Managing shipments and packages - simple CRUD
* Reporting associated data with the shipments and packages

## Getting Started
- Install Node.js runtime for your environment from https://nodejs.org/en/download/
- You can also install it through package managers like Homebrew (Mac) and Chocolatey (Windows).
- Clone this project and navigate to the home directory

## Available Functions:
- Shipment & Package Management
  - Create Shipment
  - Create Package
  - Get All Shipments
  - Get Shipments by ID
  - Get Packages by ID
  - Update Shipment
    - Update Vehicle Type
    - Add Package to the Shipment
  - Remove a Package from Shipment
- Reporting
  - Shipments & Packages associated with a specific Supplier <-> Buyer pair
  - Carbon emissions for a specific supplier
  - Most efficient supplier with respect to carbon emissions

## API endpoints 
These endpoints allow you to handle management of shipments, packages and reporting on their attributes 

## Constrains
- No backend DB is used. Instead filesystem is used for ease of simplicity.
- Creation of empty shipments is not allowed. To create a shipment its mandatory to add at least one existing package, hence a package should be created first.

## Test Data
Test data is provided for testing funcitonality of individual modules

## Assumptions
- Shipment & Package Data is available in JSON format
- Each shipment & each package are associated with a unique ID
- For Train Packages distances, distance are mutually exclusive since its associated with a package and not shipment.

## Backlog/Roadmap
- Updating an existing package within a shipment

## TODO
- [ ] Error Handling
- [ ] Improve Function Documentation

