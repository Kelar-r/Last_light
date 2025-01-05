def is_Running
def containerId

pipeline {
    agent any
    

    environment {
        REPO_URL = 'https://github.com/Kelar-r/Last_light.git'              // URL to git repo
        BRANCH = 'main'                                                     // branch to clone
        TARGET_DIR = 'Last_light'                                           // Directory where be clone repo
        DOCKER_COMPOSE_FILE = '/conf/last_light/docker-compose.yml'         // patch docker-compose.yml file located
        TARGET_FILE = "${env.WORKSPACE}/docker-compose.yml"                 // path tp target file
    }


    parameters {
        file(name: 'dockerComposeFile', description: 'Select docker-compose.yml')
    }


    stages {
        stage('Check running container or not') {
            steps {
                script {
                    containerId = sh(script: "docker ps | grep 'last_light-client'  | cut -b 1-12", returnStdout: true)
                    
                    if (containerId) {
                        currentBuild.description = "Container running: ${containerId}"
                        is_Running = true
                    } else {
                        currentBuild.description = "Container ${containerId} is not running."
                        is_Running = false
                    }
                }
            }
        }
        
        stage('Stopping container') {
            when {
                expression { is_Running }
            }
            
            steps {
                script{
                    echo "Stopping container"
                    sh"docker stop ${containerId}"
                    sh"echo we stop container"
                }
            }
        }
        

        stage('Clone repository') {
            steps {
                script {
                    sh "rm -rf ${TARGET_DIR}"
                    sh "git clone -b ${BRANCH} ${REPO_URL} ${TARGET_DIR}"
                }
            }
        }


        stage('Replace docker-compose.yml') {
            steps {
                script {
                    if (fileExists(DOCKER_COMPOSE_FILE)) {
                        sh "cp ${DOCKER_COMPOSE_FILE} ${TARGET_FILE}"
                        echo "Файл docker-compose.yml успішно замінено."
                    } else {
                        error "Файл ${DOCKER_COMPOSE_FILE} не знайдено!"
                    }
                }
            }
        }


        stage('Build container') {
            steps {
                script {
                    sh "cd Last_light"
                    sh "docker-compose build | docker-compose up -d"
                }
            }
        }
    }
}
