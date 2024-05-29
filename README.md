# Projeto de Controle Financeiro

## Descrição
Este projeto é um site completo de controle financeiro pessoal, desenvolvido para uso pessoal e como parte do seu portfólio. O site é responsivo e inclui integração com banco de dados, utilizando ferramentas gratuitas.

## Funcionalidades
- Cadastro de receitas e despesas
- Visualização de saldo atual
- Gráficos de visualização financeira
- Filtros de pesquisa por data e categoria
- Responsividade para diferentes dispositivos
- Autenticação de usuários

## Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript
- Bootstrap
- Python (Django)
- SQLite (ou outro banco de dados gratuito)
- Git e GitHub para controle de versão



## Configuração do Ambiente

### Pré-requisitos
- Python 3.x
- Pip (gerenciador de pacotes do Python)
- Virtualenv (opcional, mas recomendado)

### Passos para Configuração
1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/projeto-financeiro.git
    cd projeto-financeiro
    ```

2. Crie um ambiente virtual (opcional, mas recomendado):
    ```bash
    python3 -m venv venv
    source venv/bin/activate  # No Windows use `venv\Scripts\activate`
    ```

3. Instale as dependências:
    ```bash
    pip install -r requirements.txt
    ```

4. Realize as migrações do banco de dados:
    ```bash
    python manage.py migrate
    ```

5. Execute o servidor de desenvolvimento:
    ```bash
    python manage.py runserver
    ```

6. Acesse o site no seu navegador:
    ```
    http://127.0.0.1:8000/
    ```

## Contribuições
Para contribuir com o projeto:
1. Fork este repositório.
2. Crie uma branch para a sua feature (`git checkout -b feature-nova`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Faça o push para a branch (`git push origin feature-nova`).
5. Abra um Pull Request.

## Licença
Este projeto está licenciado sob a [MIT License](LICENSE).

## Autor
- [Seu Nome](https://github.com/seu-usuario)

