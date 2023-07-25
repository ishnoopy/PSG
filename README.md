PSG is a lightweight MVC (Model-View-Controller) framework designed for Node.js and Express, offering a structured approach to building scalable applications while effectively separating application logic. Its key features include adhering to the MVC architecture, intuitive routing through Express, support for various database systems, the use of templating engines like EJS for dynamic views, and the ability to employ Express middleware for common tasks such as authentication and error handling.

To begin using PSG, follow these steps:

1. **Installation**: Clone the PSG repository or use npm to install it as a dependency:

   ```shell
   $ git clone https://github.com/ishnoopy/PSG.git
   $ cd PSG
   $ npm install
   ```

2. **Configuration**: Customize the `config.js` file to tailor the application's settings, database connections, and other specific variables according to your requirements.

3. **Route Definition**: Create your application routes in the designated `routes` directory.

4. **Controllers**: Implement the application's controllers in the `controllers` directory. Handle business logic and process requests received from the defined routes.

5. **Models**: Define the necessary models in the `models` directory to interact with the database, perform data validation, and manage data manipulation tasks.

6. **Views**: Develop your views using the EJS templating engine in the `views` directory. Utilize dynamic content rendering to generate HTML responses.

7. **Starting the Server**: Launch the server by executing the following command:

    ```shell
    $ npm start
    ```

8. **Accessing the App**: Access your PSG application through a web browser by navigating to http://localhost:3000 (DEFAULT PORT).

PSG aims to be user-friendly, offering a simple and intuitive API that enables users to swiftly initiate and develop their projects. With its focus on separation of concerns and code organization, PSG provides a solid foundation for small-scale projects and beyond.
