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
('59e5fad9-1e48-4208-89fb-8fe0354c6108', 'superhr@trade.com', 'Super HR', '$2b$10$A822vnDThh5wxJ80f66I6u0SmrlCfPuGHfDbnxo2bzfsICHxRG.Bu', '0'),
('e27e808e-9737-42a4-9de6-a8a3b8a63fd6', 'andylu@trade.com', 'Andy Lu', '$2b$10$Z8M.IYn9ZP50Z1L1MK0C8OzgdjPBBgSL1wLy2X7zCVZqcdogLsode', '1'),
('b8dc7771-2286-4f0a-ada9-68f33392ce49', 'zedansari@trade.com', 'Zed Ansari', '$2b$10$ECvlzgIG1ZfZS6QvW02buOdJv1M/LKSqB/e/KjqLwgC9aktlBLeTC', '1'),
('ebffd134-9022-4261-80a9-4c15d9b0a525', 'junhuang@trade.com', 'Jun Huang', '$2b$10$Cjkeb63ik3ZZ77PJXuPO5.2SUYA7zBxAAG6S9i6Nog2bV954a69CG', '1');

INSERT INTO StockRecord VALUES
('e27e808e-9737-42a4-9de6-a8a3b8a63fd6', DEFAULT, 'Advanced Micro Devices, Inc.', 'AMD', 'NASDAQ', 15.52, 23.33, 5, now()),
('e27e808e-9737-42a4-9de6-a8a3b8a63fd6', DEFAULT, 'Coca-Cola Co', 'KO', 'NYSE', 35.00, 45.30, 3, '2019-03-05 12:00:00'),
('e27e808e-9737-42a4-9de6-a8a3b8a63fd6', DEFAULT, 'Teekay Corporation', 'TK', 'NYSE', 5.20, 3.91, 10, '2019-02-14 14:17:52'),
('e27e808e-9737-42a4-9de6-a8a3b8a63fd6', DEFAULT, 'Ebay Inc', 'EBAY', 'NYSE', 42.00, 36.30, 6, '2019-01-08 17:01:29'),
('e27e808e-9737-42a4-9de6-a8a3b8a63fd6', DEFAULT, 'Nvidia Corporation', 'NVDA', 'NASDAQ', 149.69, 170.45, 2, '2018-12-21 19:29:36'),
('e27e808e-9737-42a4-9de6-a8a3b8a63fd6', DEFAULT, 'Electronic Arts Inc.', 'EA', 'NASDAQ', 69.99, 98.98, 7, '2019-02-02 18:44:48'),
('e27e808e-9737-42a4-9de6-a8a3b8a63fd6', DEFAULT, 'Microsoft Corporation', 'MSFT', 'NASDAQ', 99.41, 115.91, 5, '2019-03-08 10:57:38'),
('e27e808e-9737-42a4-9de6-a8a3b8a63fd6', DEFAULT, 'Amazon Com Inc', 'AMZN', 'NYSE', 1692.95, 1712.36, 2, '2018-12-24 23:30:15');

INSERT INTO StockRecord VALUES
('b8dc7771-2286-4f0a-ada9-68f33392ce49', DEFAULT, 'Alphabet Inc', 'GOOGL', 'NYSE', 1279.13, 1190.30, 56, '2019-01-23 19:53:14'),
('b8dc7771-2286-4f0a-ada9-68f33392ce49', DEFAULT, 'Intuitive Surgical Inc', 'ISRG', 'NYSE', 367.89, 543.46, 15, '2018-03-18 11:04:39'),
('b8dc7771-2286-4f0a-ada9-68f33392ce49', DEFAULT, 'NetApp Inc', 'NTAP', 'NASDAQ', 55.50, 70.43, 34, '2015-01-23 23:33:14'),
('b8dc7771-2286-4f0a-ada9-68f33392ce49', DEFAULT, 'Illumina Inc', 'ILMN', 'NYSE', 749.23, 792.03, 54, '2014-08-18 17:04:39'),
('b8dc7771-2286-4f0a-ada9-68f33392ce49', DEFAULT, 'Boston Scientific Corp.', 'BSX', 'NYSE', 705.32, 839.00, 23, '2016-11-23 09:23:14'),
('b8dc7771-2286-4f0a-ada9-68f33392ce49', DEFAULT, 'Under Armour Inc', 'UA', 'NASDAQ', 44.33, 34.46, 86, '2013-11-18 17:56:33'),
('b8dc7771-2286-4f0a-ada9-68f33392ce49', DEFAULT, 'HCA Healthcare', 'HCA', 'NYSE', 34.13, 10.30, 15, '2017-07-23 06:26:14'),
('b8dc7771-2286-4f0a-ada9-68f33392ce49', DEFAULT, 'TripAdvisor Inc', 'TRIP', 'NASDAQ', 823.33, 836.46, 14, '2019-02-18 13:12:39');

INSERT INTO StockRecord VALUES
('ebffd134-9022-4261-80a9-4c15d9b0a525', DEFAULT, 'Align Technology', 'ALGN', 'NASDAQ', 1279.13, 1190.30, 65, '2019-05-05 01:33:11'),
('ebffd134-9022-4261-80a9-4c15d9b0a525', DEFAULT, 'NRG Energy', 'NRG', 'NYSE', 384.28, 483.27, 32, '2013-04-13 06:53:09'),
('ebffd134-9022-4261-80a9-4c15d9b0a525', DEFAULT, 'First Solar', 'FSLR', 'NASDAQ', 15.34, 34.43, 2, '2018-08-23 11:43:10'),
('ebffd134-9022-4261-80a9-4c15d9b0a525', DEFAULT, 'Vertex Pharmaceuticals', 'VRTX', 'NASDAQ', 254.02, 102.38, 5, '2013-11-23 18:23:38'),
('ebffd134-9022-4261-80a9-4c15d9b0a525', DEFAULT, 'Micron', 'MU', 'NYSE', 647.99, 736.39, 15, '2011-09-16 23:13:34'),
('ebffd134-9022-4261-80a9-4c15d9b0a525', DEFAULT, 'Boeing', 'BA', 'NASDAQ', 847.03, 927.39, 23, '2015-10-07 17:08:23'),
('ebffd134-9022-4261-80a9-4c15d9b0a525', DEFAULT, 'D.R. Horton', 'DHI', 'NASDAQ', 43.33, 34.23, 24, '2013-05-01 08:01:56'),
('ebffd134-9022-4261-80a9-4c15d9b0a525', DEFAULT, 'Centene Corp.', 'CNC', 'NASDAQ', 1279.13, 1732.03, 27, '2017-01-21 04:05:16');

SELECT StockRecord.userID, stockID, stockName, stockSymbol, marketType, buyPrice, sellPrice, numberOfStocks, purchaseDate, UserAccount.userFullName, UserAccount.username FROM StockRecord INNER JOIN UserAccount ON StockRecord.userID = UserAccount.userID;
SELECT * FROM StockRecord;
SELECT * FROM UserAccount;