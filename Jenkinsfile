pipeline {
    agent any

    parameters {
        string(
            name: 'SPEC',
            defaultValue: 'cypress/e2e/**/*.cy.ts',
            description: 'Ruta de los tests a ejecutar'
        )
        choice(
            name: 'BROWSER',
            choices: ['chrome', 'edge', 'firefox'],
            description: 'Navegador para ejecutar Cypress'
        )
    }

    stages {
        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Verify Cypress') {
            steps {
                bat 'npx cypress verify'
            }
        }

        stage('Run tests') {
            steps {
                bat "npx cypress run --browser ${params.BROWSER} --spec \"${params.SPEC}\""
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'cypress/screenshots/**/*, cypress/videos/**/*', allowEmptyArchive: true
            junit 'cypress/results/*.xml'
        }
        success {
            echo 'Tests ejecutados correctamente'
        }
        failure {
            echo 'Algunos tests fallaron'
        }
    }
}