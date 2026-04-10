pipeline {
    agent any

    parameters {
        string(name: 'SPEC', defaultValue: 'cypress/e2e/**/*.cy.ts', description: 'Ruta de los tests')
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: 'Navegador')
    }

    stages {
        stage('Install dependencies') {
            steps {
                bat '''
                    set NO_COLOR=1
                    set FORCE_COLOR=0
                    npm install
                '''
            }
        }

        stage('Verify Cypress') {
            steps {
                bat '''
                    set NO_COLOR=1
                    set FORCE_COLOR=0
                    npx cypress verify
                '''
            }
        }

        stage('Run tests') {
            steps {
                bat """
                    set NO_COLOR=1
                    set FORCE_COLOR=0
                    set TERM=dumb
                    npx cypress run --browser ${params.BROWSER} --spec "${params.SPEC}"
                """
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'cypress/screenshots/**/*, cypress/videos/**/*', allowEmptyArchive: true
        }
    }
}