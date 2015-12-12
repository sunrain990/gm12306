create database gm12306;
use gm12306;

CREATE TABLE `pic` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `picurl` varchar(64) NOT NULL COMMENT '图片地址',
  `picis` varchar(8) not null default 0 comment '图片描述',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='图片库';

CREATE TABLE `identifycode` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `picurl` varchar(64) NOT NULL COMMENT '图片地址',
  `description` varchar(8) not null comment '图片描述',
  `identifies` varchar(64) not null comment '图片验证',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='生成验证码';