# until
# --> digite qualquer comando seguido de "-help" para ver
# uma descrição
$ <command> -help

# --> digite "man" seguido do nome do comando que você precisa
# de informação
$ man <command>

# LISTA DE COMANDOS

# lista de diretórios
$ ls

# lista de diretórios com exibição de arquivos ocultos
$ ls -al

# muda o diretório atual para o específicado
$ cd <dir>

# muda par ao diretório home
$ cd

# exibe o caminho do diretório atual
$ pwd

# cria o diretório específicado
$ mkdir <dir>

# apaga um arquivo específicado
$ rm <arq1>

# apaga um diretório específicado
$ rm -r <dir>

# apaga um arquivo específicado
$ rm -f <arq1>

# apaga um diretório específicado
$ rm -rf <dir>

# copia o arquivo1 para o arquivo2
$ cp -r <arq1> <arq2>

# usado para renomear ou mover um arquivo
$ mv <arq1> <arq2>

# cria um link simbólico
$ ln -s <arq> <linkName>

# cria ou atualiza o arquivo
$ touch <arq>

# direciona a entrada padrão para um arquivo
$ cat > <arq>

# exive o conteúdo de um arquivo
$ more <arq>

# exibe as primeiras 10 linhas de um arquivo
$ head <arq>

# exibe as ultimas 10 linhas de um arquivo
$ tail <arq>

# exibe o conteúdo de um arquivo enquanto ele é atualizado
$ tail -f <arq>

# exibe todos os processos dos usuários em tempo real
$ ps

# exibe todos os processos rodando em tempo real
$ top

# mata um processo específico pelo numero ID
$ kill <pId>

# mata todos os processos com o nome específicado
$ killall proc

# lista trabalhos parados ou em segundo plano
$ bg

# traz o trabalho mais recente para o primeiro plano
$ fg

# traz o trabalho para o primeiro plano
$ fg <trab>

# Muda as permissões do arquivo para octal (4: R, 2: W, 1: X)
# chmod 777 = User: (rwx), group: (rwx), other (rwx)
$ chmod octal <arq>

# conecta ao host como usuário
$ ssh <usuário@host>

#
