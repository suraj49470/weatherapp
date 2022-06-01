Applcaition is created using React + React Hooks


To run application follow below steps:


        git clone https://github.com/suraj49470/weatherapp.git
        
        cd weatherapp
        
        npm install
        
        npm run start


To run application using docker :


    Create image and run:


                git clone https://github.com/suraj49470/weatherapp.git
        
                cd weatherapp

                docker build -t [APP_NAME] .

                docker run -it --rm -p 3000:3000 [APP_NAME]
        

     Pull application from Docker repository :

                docker pull suraj49470/weatherapp:latest

                docker run -it --rm -p 3000:3000 suraj49470/weatherapp







Running version of application is available on :

    https://surajsingh-weatheapp.netlify.app/
