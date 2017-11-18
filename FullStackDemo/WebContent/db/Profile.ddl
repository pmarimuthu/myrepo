-- Table: "Profile"

-- DROP TABLE "Profile";

CREATE TABLE "Profile"
(
  gender character(1), -- gender...
  dateofbirth date, -- dateofbirth...
  mothertongue smallint, -- mothertongue...
  caste smallint, -- caste...
  subcaste smallint, -- subcaste...
  gowthram smallint, -- gowthram...
  firstname character varying(64),
  lastname character varying(64),
  email character varying(128),
  displayname character varying(256),
  mobilenumber character varying(16),
  password character varying(64),
  id serial NOT NULL
)
WITH (
  OIDS=FALSE
);
ALTER TABLE "Profile"
  OWNER TO postgres;
COMMENT ON TABLE "Profile"
  IS 'User Profile
--------------
lastname
displayname
email
mobilenumber
password
rbgender
dateofbirth
mothertongue
caste
subcaste
gowthram';
COMMENT ON COLUMN "Profile".gender IS 'gender
single char
M/F';
COMMENT ON COLUMN "Profile".dateofbirth IS 'dateofbirth
Displayed as ''YYYY-MM-DD''.';
COMMENT ON COLUMN "Profile".mothertongue IS 'mothertongue
smallint';
COMMENT ON COLUMN "Profile".caste IS 'caste
smallint';
COMMENT ON COLUMN "Profile".subcaste IS 'subcaste
smallint';
COMMENT ON COLUMN "Profile".gowthram IS 'gowthram
smallint';

