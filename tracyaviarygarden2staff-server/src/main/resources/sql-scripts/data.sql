INSERT INTO app_role (id, role_name, description) VALUES (1, 'STANDARD_USER', 'Standard User - Has no admin rights');
INSERT INTO app_role (id, role_name, description) VALUES (2, 'ADMIN_USER', 'Admin User - Has permission to perform admin tasks');

-- USER
-- non-encrypted password: jwtpass
INSERT INTO app_user (id, first_name, last_name, password, username) VALUES (1, 'John', 'Doe', '821f498d827d4edad2ed0960408a98edceb661d9f34287ceda2962417881231a', 'john.doe');
INSERT INTO app_user (id, first_name, last_name, password, username) VALUES (2, 'Admin', 'Admin', '821f498d827d4edad2ed0960408a98edceb661d9f34287ceda2962417881231a', 'admin.admin');


INSERT INTO user_role(user_id, role_id) VALUES(1,1);
INSERT INTO user_role(user_id, role_id) VALUES(2,1);
INSERT INTO user_role(user_id, role_id) VALUES(2,2);

-- Populate random city table

INSERT INTO random_city(id, name) VALUES (1, 'Bamako');
INSERT INTO random_city(id, name) VALUES (2, 'Nonkon');
INSERT INTO random_city(id, name) VALUES (3, 'Houston');
INSERT INTO random_city(id, name) VALUES (4, 'Toronto');
INSERT INTO random_city(id, name) VALUES (5, 'New York City');
INSERT INTO random_city(id, name) VALUES (6, 'Mopti');
INSERT INTO random_city(id, name) VALUES (7, 'Koulikoro');
INSERT INTO random_city(id, name) VALUES (8, 'Moscow');


INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (1, 'E1', 1, 23000.23, '2008-7-04', 'Manager');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (2, 'E2', 1, 23000.23, '2008-7-04', 'Manager');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (3, 'E3', 3, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (4, 'E4', 4, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (5, 'E5', 5, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (6, 'E6', 6, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (7, 'E7', 7, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (8, 'E8', 8, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (9, 'E9', 9, 23000.23, '2008-7-04', 'Manager');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (10, 'E10', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (11, 'E11', 10, 23000.23, '2008-7-05', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (12, 'E12', 10, 23000.23, '2008-7-06', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (13, 'E13', 10, 23000.23, '2008-7-07', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (14, 'E14', 10, 23000.23, '2008-7-08', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (15, 'E15', 10, 23000.23, '2008-7-09', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (16, 'E16', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (17, 'E17', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (18, 'E18', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (19, 'E19', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (20, 'E20', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (21, 'E21', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (22, 'E22', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (23, 'E23', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (24, 'E24', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (25, 'E25', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (26, 'E26', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (27, 'E27', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (28, 'E28', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (29, 'E29', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (30, 'E30', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (31, 'E31', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (32, 'E32', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (33, 'E33', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (34, 'E34', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (35, 'E35', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (36, 'E36', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (37, 'E37', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (38, 'E38', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (39, 'E39', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (40, 'E40', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (41, 'E41', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (42, 'E42', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (43, 'E43', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (44, 'E44', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (45, 'E45', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (46, 'E46', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (47, 'E47', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (48, 'E48', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (49, 'E49', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (50, 'E50', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (51, 'E51', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (52, 'E52', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (53, 'E53', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (54, 'E54', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (55, 'E55', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (56, 'E56', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (57, 'E57', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (58, 'E58', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (59, 'E59', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (60, 'E60', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (61, 'E61', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (62, 'E62', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (63, 'E63', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (64, 'E64', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (65, 'E65', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (66, 'E66', 10, 23000.23, '2008-7-04', 'Employee');
INSERT INTO employee(id, name, age, salary, hireDate, employeeType) VALUES (67, 'E67', 10, 23000.23, '2008-7-04', 'Employee');


