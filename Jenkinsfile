pipeline {
    agent: any

    parameters{
        string(name: "SPEC", defaultValue: "cypress/e2e/**/**", description: "Ej:: cypress/e2e/*cy.ts")
        choice(name: "BROWSER", choices: ['chrome', 'edge', 'firefox'], description: "Escoja un browser para ejecutar los tests")
    }

    stages{
        stage('Build'){
            steps{
                echo "Building application"
            }
        }
        stage("Testing"){
            steps{
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage("Deploy"){
            steps{
                echo "Deploying the application"
            }
        }
    } 
}