<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250724193137 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE calendar DROP FOREIGN KEY calendar_ibfk_1');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, role_id INT DEFAULT NULL, pseudo VARCHAR(50) NOT NULL, first_name VARCHAR(50) NOT NULL, last_name VARCHAR(50) NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, INDEX IDX_8D93D649D60322AC (role_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', available_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', delivered_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649D60322AC FOREIGN KEY (role_id) REFERENCES role (id)');
        $this->addSql('ALTER TABLE users DROP FOREIGN KEY users_ibfk_1');
        $this->addSql('DROP TABLE users');
        $this->addSql('ALTER TABLE calendar MODIFY idCalendar INT NOT NULL');
        $this->addSql('DROP INDEX idUser ON calendar');
        $this->addSql('DROP INDEX `primary` ON calendar');
        $this->addSql('ALTER TABLE calendar CHANGE title title VARCHAR(50) NOT NULL, CHANGE idCalendar id INT AUTO_INCREMENT NOT NULL, CHANGE idUser user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE calendar ADD CONSTRAINT FK_6EA9A146A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_6EA9A146A76ED395 ON calendar (user_id)');
        $this->addSql('ALTER TABLE calendar ADD PRIMARY KEY (id)');
        $this->addSql('ALTER TABLE role MODIFY idRole INT NOT NULL');
        $this->addSql('DROP INDEX `primary` ON role');
        $this->addSql('ALTER TABLE role ADD role VARCHAR(20) NOT NULL, DROP roleName, CHANGE idRole id INT AUTO_INCREMENT NOT NULL');
        $this->addSql('ALTER TABLE role ADD PRIMARY KEY (id)');
        $this->addSql('ALTER TABLE theme MODIFY idTheme INT NOT NULL');
        $this->addSql('ALTER TABLE theme DROP FOREIGN KEY theme_ibfk_1');
        $this->addSql('DROP INDEX nameTheme_3 ON theme');
        $this->addSql('DROP INDEX name ON theme');
        $this->addSql('DROP INDEX idCalendar ON theme');
        $this->addSql('DROP INDEX nameTheme ON theme');
        $this->addSql('DROP INDEX nameTheme_2 ON theme');
        $this->addSql('DROP INDEX `primary` ON theme');
        $this->addSql('ALTER TABLE theme ADD name VARCHAR(50) NOT NULL, DROP nameTheme, DROP idCalendar, CHANGE idTheme id INT AUTO_INCREMENT NOT NULL');
        $this->addSql('ALTER TABLE theme ADD PRIMARY KEY (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE calendar DROP FOREIGN KEY FK_6EA9A146A76ED395');
        $this->addSql('CREATE TABLE users (idUser INT AUTO_INCREMENT NOT NULL, pseudo VARCHAR(50) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_general_ci`, nom VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_general_ci`, prenom VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_general_ci`, email VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_general_ci`, password VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_general_ci`, idRole INT DEFAULT NULL, UNIQUE INDEX pseudo (pseudo), UNIQUE INDEX email (email), INDEX idRole (idRole), PRIMARY KEY(idUser)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_general_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE users ADD CONSTRAINT users_ibfk_1 FOREIGN KEY (idRole) REFERENCES role (idRole)');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649D60322AC');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE messenger_messages');
        $this->addSql('ALTER TABLE calendar MODIFY id INT NOT NULL');
        $this->addSql('DROP INDEX IDX_6EA9A146A76ED395 ON calendar');
        $this->addSql('DROP INDEX `PRIMARY` ON calendar');
        $this->addSql('ALTER TABLE calendar CHANGE title title VARCHAR(255) DEFAULT \'NULL\', CHANGE id idCalendar INT AUTO_INCREMENT NOT NULL, CHANGE user_id idUser INT DEFAULT NULL');
        $this->addSql('ALTER TABLE calendar ADD CONSTRAINT calendar_ibfk_1 FOREIGN KEY (idUser) REFERENCES users (idUser)');
        $this->addSql('CREATE INDEX idUser ON calendar (idUser)');
        $this->addSql('ALTER TABLE calendar ADD PRIMARY KEY (idCalendar)');
        $this->addSql('ALTER TABLE role MODIFY id INT NOT NULL');
        $this->addSql('DROP INDEX `PRIMARY` ON role');
        $this->addSql('ALTER TABLE role ADD roleName VARCHAR(50) DEFAULT \'NULL\', DROP role, CHANGE id idRole INT AUTO_INCREMENT NOT NULL');
        $this->addSql('ALTER TABLE role ADD PRIMARY KEY (idRole)');
        $this->addSql('ALTER TABLE theme MODIFY id INT NOT NULL');
        $this->addSql('DROP INDEX `PRIMARY` ON theme');
        $this->addSql('ALTER TABLE theme ADD nameTheme VARCHAR(255) NOT NULL, ADD idCalendar INT DEFAULT NULL, DROP name, CHANGE id idTheme INT AUTO_INCREMENT NOT NULL');
        $this->addSql('ALTER TABLE theme ADD CONSTRAINT theme_ibfk_1 FOREIGN KEY (idCalendar) REFERENCES calendar (idCalendar)');
        $this->addSql('CREATE UNIQUE INDEX nameTheme_3 ON theme (nameTheme)');
        $this->addSql('CREATE UNIQUE INDEX name ON theme (nameTheme)');
        $this->addSql('CREATE INDEX idCalendar ON theme (idCalendar)');
        $this->addSql('CREATE UNIQUE INDEX nameTheme ON theme (nameTheme)');
        $this->addSql('CREATE UNIQUE INDEX nameTheme_2 ON theme (nameTheme)');
        $this->addSql('ALTER TABLE theme ADD PRIMARY KEY (idTheme)');
    }
}
