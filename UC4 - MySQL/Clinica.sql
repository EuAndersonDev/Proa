CREATE DATABASE db_clinica;
USE db_clinica;

-- 1. Criação das Tabelas (Sem dependências de FK)
CREATE TABLE tb_dentista(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cro_dentista VARCHAR(10) NOT NULL,
    telefone_dentista CHAR(14) NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    especialidade VARCHAR(255) NOT NULL,
    estado_civil ENUM("solteiro(a)", "casado(a)", "viuvo(a)", "divorciado(a)") NOT NULL,
    data_admissao DATE NOT NULL,
    data_nascimento DATE NOT NULL,
    email VARCHAR(255) NOT NULL
);

CREATE TABLE tb_paciente(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cpf VARCHAR(14) NOT NULL, -- Ajustado para 14 para suportar pontos e hífen
    telefone_paciente CHAR(14) NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    genero ENUM("masculino", "feminino", "outros"),
    data_nascimento DATE NOT NULL,
    email VARCHAR(255) NOT NULL,
    convenio VARCHAR(255) NOT NULL, 
    observacao VARCHAR(255) NOT NULL,
    data_cadastro DATE NOT NULL
);

CREATE TABLE tb_sala(
    id INT AUTO_INCREMENT PRIMARY KEY,
    numero_sala INT NOT NULL,
    tipo_sala VARCHAR(255) NOT NULL
);

-- 2. Criação da Tabela com Chaves Estrangeiras
CREATE TABLE tb_consulta(
    id INT AUTO_INCREMENT PRIMARY KEY,
    data_consulta DATETIME NOT NULL,
    procedimento VARCHAR(255) NOT NULL,
    id_dentista INT,
    id_paciente INT,
    CONSTRAINT fk_consulta_dentista FOREIGN KEY (id_dentista) REFERENCES tb_dentista(id) ON DELETE SET NULL,
    CONSTRAINT fk_consulta_paciente FOREIGN KEY (id_paciente) REFERENCES tb_paciente(id) ON DELETE SET NULL
);

DROP TABLE tb_consulta;
DROP TABLE tb_sala;
DROP TABLE tb_paciente;
DROP TABLE tb_dentista;

-- =================================================================================
-- INSERTS DE TESTE
-- =================================================================================

-- =================================================================================
-- 10 REGISTROS: DENTISTAS
-- =================================================================================
INSERT INTO tb_dentista (nome, cro_dentista, telefone_dentista, endereco, especialidade, estado_civil, data_admissao, data_nascimento, email) VALUES
('Dr. Arnaldo Silva', 'SP-12345', '(11) 98765-4321', 'Av. Paulista, 1000 - Bela Vista', 'Ortodontia', 'casado(a)', '2020-03-15', '1980-05-20', 'arnaldo.silva@clinica.com'),
('Dra. Beatriz Souza', 'SP-67890', '(11) 97654-3210', 'Rua Augusta, 450 - Consolação', 'Endodontia', 'solteiro(a)', '2023-01-10', '1992-11-02', 'beatriz.souza@clinica.com'),
('Dr. Carlos Eduardo', 'SP-11223', '(11) 96543-2109', 'Rua Domingos de Morais, 800 - Vila Mariana', 'Pediatria', 'divorciado(a)', '2021-06-01', '1985-04-12', 'carlos.eduardo@clinica.com'),
('Dra. Daniela Lima', 'SP-44556', '(11) 95432-1098', 'Alameda Santos, 1400 - Cerqueira César', 'Periodontia', 'casado(a)', '2019-08-24', '1978-09-30', 'daniela.lima@clinica.com'),
('Dr. Fábio Guedes', 'SP-77889', '(11) 94321-0987', 'Av. Rebouças, 3500 - Pinheiros', 'Implantodontia', 'viuvo(a)', '2022-11-15', '1975-01-25', 'fabio.guedes@clinica.com'),
('Dra. Helena Roza', 'SP-99001', '(11) 93210-9876', 'Rua Teodoro Sampaio, 1200 - Pinheiros', 'Clínica Geral', 'solteiro(a)', '2024-02-01', '1996-07-08', 'helena.roza@clinica.com'),
('Dr. Guilherme Mello', 'SP-33445', '(11) 92109-8765', 'Av. Brigadeiro Luís Antônio, 2500 - Jardim Paulista', 'Cirurgia Bucomaxilofacial', 'casado(a)', '2018-05-10', '1982-03-18', 'guilherme.mello@clinica.com'),
('Dra. Juliana Prado', 'SP-55667', '(11) 91098-7654', 'Rua Vergueiro, 3000 - Vila Mariana', 'Estética Dental', 'solteiro(a)', '2023-07-19', '1994-12-05', 'juliana.prado@clinica.com'),
('Dr. Marcos Vinícius', 'SP-88990', '(11) 90987-6543', 'Av. Ibirapuera, 2100 - Moema', 'Prótese Dentária', 'casado(a)', '2017-10-05', '1973-06-14', 'marcos.vinicius@clinica.com'),
('Dra. Natália Dias', 'SP-22334', '(11) 99876-5432', 'Rua Clélia, 500 - Lapa', 'Odontopediatria', 'divorciado(a)', '2025-01-15', '1989-10-22', 'natalia.dias@clinica.com');

-- =================================================================================
-- 10 REGISTROS: PACIENTES
-- =================================================================================
INSERT INTO tb_paciente (nome, cpf, telefone_paciente, endereco, genero, data_nascimento, email, convenio, observacao, data_cadastro) VALUES
('Ricardo Alencar', '123.456.789-01', '(11) 98111-2222', 'Rua das Flores, 123 - Centro', 'masculino', '1995-07-14', 'ricardo.alencar@gmail.com', 'Amil Dental', 'Paciente tem ansiedade com o motorzinho.', '2026-01-10'),
('Mariana Costa', '987.654.321-02', '(11) 98222-3333', 'Av. João Dias, 450 - Santo Amaro', 'feminino', '2001-02-28', 'mari.costa@hotmail.com', 'Particular', 'Sem observações.', '2026-01-15'),
('Thiago Henrique', '456.789.123-03', '(11) 98333-4444', 'Rua Pampeiro, 89 - Penha', 'masculino', '1988-11-12', 'thiago.h@outlook.com', 'SulAmérica', 'Alergia a iodo.', '2026-02-03'),
('Amanda Vieira', '789.123.456-04', '(11) 98444-5555', 'Av. Celso Garcia, 1500 - Tatuapé', 'feminino', '1993-05-25', 'amanda.v@gmail.com', 'Porto Seguro', 'Hipertensa, tomar cuidado com anestesia.', '2026-02-20'),
('Lucas Gabriel', '321.654.987-05', '(11) 98555-6666', 'Rua Voluntários da Pátria, 600 - Santana', 'masculino', '2010-08-05', 'lucas.gabriel@gmail.com', 'Particular', 'Paciente infantil, necessita de paciência.', '2026-03-01'),
('Sofia Martins', '654.987.321-06', '(11) 98666-7777', 'Rua Aurora, 32 - República', 'feminino', '2004-03-22', 'sofia.martins@yahoo.com', 'Bradesco Dental', 'Sem observações.', '2026-03-12'),
('Rodrigo Souza', '159.263.487-07', '(11) 98777-8888', 'Av. Cruzeiro do Sul, 2100 - Canindé', 'masculino', '1979-12-01', 'rodrigo.souza@gmail.com', 'Interodonto', 'Diabético controlado.', '2026-04-02'),
('Camila Rodrigues', '852.963.741-08', '(11) 98888-9999', 'Rua Carneiro Leão, 415 - Brás', 'feminino', '1997-09-17', 'camila.r@hotmail.com', 'Amil Dental', 'Grávida de 4 meses.', '2026-04-18'),
('Bruno Ferraz', '753.159.456-09', '(11) 98999-0000', 'Rua dos Pinheiros, 930 - Pinheiros', 'masculino', '1984-06-30', 'bruno.ferraz@outlook.com', 'Particular', 'Fez cirurgia cardíaca há 2 anos.', '2026-05-05'),
('Larissa Mendes', '951.753.852-10', '(11) 99111-3333', 'Av. Jabaquara, 1800 - Saúde', 'feminino', '2002-01-05', 'larissa.mendes@gmail.com', 'OdontoPrev', 'Usa aparelho ortodôntico estético.', '2026-05-19');

-- =================================================================================
-- 10 REGISTROS: SALAS
-- =================================================================================
INSERT INTO tb_sala (numero_sala, tipo_sala) VALUES
(101, 'Consultório Adulto Geral'),
(102, 'Consultório Odontopediatria');

-- =================================================================================
-- 10 REGISTROS: CONSULTAS (Amarrando os IDs 1 a 10 criados acima)
-- =================================================================================
INSERT INTO tb_consulta (data_consulta, procedimento, id_dentista, id_paciente) VALUES
('2026-06-01 09:00:00', 'Manutenção de Aparelho Ortodôntico', 1, 1),
('2026-06-01 10:30:00', 'Tratamento de Canal (Endodontia)', 2, 2),
('2026-06-01 14:00:00', 'Extração de Dente de Leite', 3, 5),
('2026-06-02 08:00:00', 'Raspagem Periodontal', 4, 4),
('2026-06-02 11:00:00', 'Instalação de Implante Dentário', 5, 9),
('2026-06-02 15:30:00', 'Limpeza Basica e Aplicação de Flúor', 6, 6),
('2026-06-03 09:30:00', 'Remoção de dente siso incluso', 7, 3),
('2026-06-03 13:00:00', 'Aplicação de Faceta de Resina', 8, 10),
('2026-06-04 10:00:00', 'Moldagem para Prótese Total', 9, 7),
('2026-06-04 16:00:00', 'Restauração em Resina Composta', 10, 8);

-- =================================================================================
-- CONSULTAS PARA VERIFICAÇÃO
-- =================================================================================
SELECT * FROM tb_dentista;
SELECT * FROM tb_paciente;
SELECT * FROM tb_sala;
SELECT * FROM tb_consulta;