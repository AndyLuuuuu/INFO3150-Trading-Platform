-- Create the database
DROP DATABASE IF EXISTS TradingPlatform;
CREATE DATABASE TradingPlatform;
USE TradingPlatform;

-- create the tables
CREATE TABLE UserAccount (
    userID CHAR(36) NOT NULL,
    username VARCHAR(255) NOT NULL,
    userFullName VARCHAR(255) NOT NULL,
    userPassword VARCHAR(255) NOT NULL,
    isTrader BOOLEAN NOT NULL DEFAULT TRUE,
    PRIMARY KEY (userID)
);

CREATE TABLE StockRecord (
    userID CHAR(36) NOT NULL,
    stockID BIGINT(10) NOT NULL AUTO_INCREMENT,
    stockName VARCHAR(50) NOT NULL,
    stockSymbol VARCHAR(13) NOT NULL,
    marketType ENUM ('NASDAQ', 'NYSE') NOT NULL,    
    buyPrice DECIMAL(15, 2) NOT NULL,
    sellPrice DECIMAL(15, 2) NOT NULL,
    numberOfStocks INT NOT NULL DEFAULT 1,
    purchaseDate DATETIME NOT NULL, -- technically not part of original class diagram
    PRIMARY KEY (stockID),
    FOREIGN KEY (userID)
        REFERENCES UserAccount (userID)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- insert data into the database
INSERT INTO UserAccount VALUES
('a84d1781-46fc-453c-9a51-7d39036e755a', 'chosby', 'Bill Chosby', 'P@$$w0rd', TRUE),
('49302d7a-9393-430c-92b6-ca2fe8927c39', 'pdee', 'Paul Dee', 'j3rs3y', TRUE),
('ccf09e02-03d5-4b7e-b48b-eb59df2ae1de', 'gmiller', 'George Miller', '3yb0$$', TRUE),
('a9ba5c83-c14c-477f-b213-59c4f06f0a1c', 'tanderson', 'Thomas Anderson', 'm@tr1x', FALSE);

INSERT INTO StockRecord VALUES
('37ae2e52-2b19-424f-a472-05b38e888a60', DEFAULT, 'Advanced Micro Devices, Inc.', 'AMD', 'NASDAQ', 15.52, 23.33, 5, now()),
('37ae2e52-2b19-424f-a472-05b38e888a60', DEFAULT, 'Coca-Cola Co', 'KO', 'NYSE', 35.00, 45.30, 3, '2019-03-05 12:00:00'),
('37ae2e52-2b19-424f-a472-05b38e888a60', DEFAULT, 'Teekay Corporation', 'TK', 'NYSE', 5.20, 3.91, 10, '2019-02-14 14:17:52'),
('37ae2e52-2b19-424f-a472-05b38e888a60', DEFAULT, 'Ebay Inc', 'EBAY', 'NYSE', 42.00, 36.30, 6, '2019-01-08 17:01:29'),
('37ae2e52-2b19-424f-a472-05b38e888a60', DEFAULT, 'Nvidia Corporation', 'NVDA', 'NASDAQ', 149.69, 170.45, 2, '2018-12-21 19:29:36'),
('37ae2e52-2b19-424f-a472-05b38e888a60', DEFAULT, 'Electronic Arts Inc.', 'EA', 'NASDAQ', 69.99, 98.98, 7, '2019-02-02 18:44:48'),
('37ae2e52-2b19-424f-a472-05b38e888a60', DEFAULT, 'Microsoft Corporation', 'MSFT', 'NASDAQ', 99.41, 115.91, 5, '2019-03-08 10:57:38'),
('37ae2e52-2b19-424f-a472-05b38e888a60', DEFAULT, 'Amazon Com Inc', 'AMZN', 'NYSE', 1692.95, 1712.36, 2, '2018-12-24 23:30:15'),
('37ae2e52-2b19-424f-a472-05b38e888a60', DEFAULT, 'Alphabet Inc', 'GOOGL', 'NYSE', 1279.13, 1190.30, 1, '2019-01-23 19:53:14'),
('37ae2e52-2b19-424f-a472-05b38e888a60', DEFAULT, 'Netflix Inc', 'NFLX', 'NYSE', 301.33, 361.46, 8, '2019-03-18 17:04:39');

SELECT * FROM StockRecord;
SELECT * FROM UserAccount;