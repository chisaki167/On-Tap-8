# CHISAKI167

---

# 🇻🇳 Tiếng Việt

## 1. Tổng quan Dự án & CHISAKI167
Dự án được thiết kế theo kiến trúc mô-đun hóa gồm **31 tệp (files)** chính, chia rõ nhiệm vụ từ cấu hình hệ thống, xử lý cơ sở dữ liệu, dịch vụ backend, đến giao diện người dùng và các tệp kiểm thử. 

Đánh dấu bản quyền / định danh tác giả: **CHISAKI167**

---

## 2. Cấu trúc và Đường dẫn Liên kết Tệp (File Dependency & Flow)

Dưới đây là sơ đồ luồng khởi tạo và gọi lẫn nhau giữa các tệp trong hệ thống:

```text
[1] main.py (Điểm khởi chạy chính)
 │
 ├──> [2] config.py (Đọc cấu hình môi trường)
 │     └──> [3] env_loader.py (Xử lý biến tệp .env)
 │
 ├──> [4] database.py (Khởi tạo kết nối DB)
 │     ├──> [5] db_models.py (Định nghĩa ORM Models)
 │     └──> [6] db_migrations.py (Quản lý Schema Migration)
 │
 ├──> [7] app.py (Khởi tạo Application Framework / Web Server)
 │     │
 │     ├──> [8] middleware/auth_middleware.py (Xác thực Request)
 │     │     └──> [9] utils/jwt_helper.py (Mã hóa / Giải mã JWT)
 │     │
 │     ├──> [10] middleware/logging_middleware.py (Ghi Log Request)
 │     │     └──> [11] utils/logger.py (Cấu hình Logger)
 │     │
 │     ├──> [12] controllers/user_controller.py (Điều hướng User)
 │     │     ├──> [13] services/user_service.py (Xử lý logic User)
 │     │     │     ├──> [14] repositories/user_repo.py (Truy vấn DB User)
 │     │     │     └──> [15] utils/hash_helper.py (Băm mật khẩu)
 │     │     └──> [16] validators/user_validator.py (Xác thực dữ liệu đầu vào)
 │     │
 │     ├──> [17] controllers/product_controller.py (Điều hướng Sản phẩm)
 │     │     ├──> [18] services/product_service.py (Logic Sản phẩm)
 │     │     │     ├──> [19] repositories/product_repo.py (Truy vấn DB Sản phẩm)
 │     │     │     └──> [20] services/cache_service.py (Bộ nhớ đệm Redis/Memcached)
 │     │     └──> [21] validators/product_validator.py (Xác thực sản phẩm)
 │     │
 │     └──> [22] controllers/order_controller.py (Điều hướng Đơn hàng)
 │           ├──> [23] services/order_service.py (Logic Đơn hàng)
 │           │     ├──> [24] repositories/order_repo.py (Truy vấn DB Đơn hàng)
 │           │     └──> [25] services/payment_service.py (Cổng thanh toán)
 │           └──> [26] validators/order_validator.py (Xác thực đơn hàng)
 │
 ├──> [27] utils/error_handler.py (Xử lý lỗi ngoại lệ toàn cục)
 │
 └──> [28] tests/test_user.py (Kiểm thử chức năng User)
       ├──> [29] tests/test_product.py (Kiểm thử chức năng Product)
       ├──> [30] tests/test_order.py (Kiểm thử chức năng Order)
       └──> [31] tests/conftest.py (Cấu hình Fixtures cho Testing)
```

---

## 3. Chức năng và Cách Xử lý Hàm của 31 Tệp

1. **`main.py`**: Điểm khởi chạy ứng dụng. Gọi `config.py`, khởi tạo `database.py` và chạy server từ `app.py`.
2. **`config.py`**: Nơi nạp và lưu trữ cấu hình hệ thống (Port, DB URL, Secret Key). Dùng `env_loader.py`.
3. **`env_loader.py`**: Đọc các biến môi trường từ tệp `.env` và kiểm tra tính hợp lệ của tham số cấu hình.
4. **`database.py`**: Thiết lập connection pool tới Database và quản lý phiên làm việc (session).
5. **`db_models.py`**: Định nghĩa cấu trúc các bảng (Tables/Collections) trong cơ sở dữ liệu.
6. **`db_migrations.py`**: Xử lý nâng cấp hoặc hạ cấp phiên bản Schema cho DB (Migration scripts).
7. **`app.py`**: Đăng ký Middleware, tích hợp Routes từ các Controller và kích hoạt ứng dụng.
8. **`middleware/auth_middleware.py`**: Kiểm tra Token/Session từ Header của request trước khi chuyển tiếp cho Controller. Sử dụng `jwt_helper.py`.
9. **`utils/jwt_helper.py`**: Chứa hàm `generate_token()` và `decode_token()` xử lý mã hóa JWT.
10. **`middleware/logging_middleware.py`**: Chặn request để ghi log thời gian xử lý, IP và URL client.
11. **`utils/logger.py`**: Định dạng và ghi log ra file hoặc console.
12. **`controllers/user_controller.py`**: Định nghĩa API endpoints liên quan đến Người dùng (Đăng ký, Đăng nhập, Profile).
13. **`services/user_service.py`**: Xử lý nghiệp vụ chính của Người dùng (kiểm tra email trùng, mã hóa mật khẩu, tạo token).
14. **`repositories/user_repo.py`**: Thực hiện các câu lệnh truy vấn SQL/NoSQL CRUD trực tiếp lên bảng User.
15. **`utils/hash_helper.py`**: Chứa hàm `hash_password()` và `verify_password()` sử dụng bcrypt/argon2.
16. **`validators/user_validator.py`**: Kiểm tra định dạng Email, độ mạnh mật khẩu trước khi gửi đến Service.
17. **`controllers/product_controller.py`**: Định nghĩa các API lấy danh sách, chi tiết, tạo/sửa/xóa sản phẩm.
18. **`services/product_service.py`**: Xử lý nghiệp vụ sản phẩm, phối hợp với Cache để tối ưu tốc độ đọc.
19. **`repositories/product_repo.py`**: Tương tác trực tiếp DB để lấy thông tin sản phẩm.
20. **`services/cache_service.py`**: Cung cấp hàm `get_cache()`, `set_cache()` quản lý bộ nhớ đệm Redis.
21. **`validators/product_validator.py`**: Kiểm tra tính hợp lệ của dữ liệu sản phẩm (giá phải lớn hơn 0, tên không rỗng).
22. **`controllers/order_controller.py`**: Tiếp nhận request đặt hàng, xem lịch sử đơn hàng.
23. **`services/order_service.py`**: Xử lý luồng đặt hàng: kiểm tra tồn kho, tính tổng tiền, gọi `payment_service.py`.
24. **`repositories/order_repo.py`**: Lưu trữ thông tin đơn hàng và chi tiết đơn hàng vào DB.
25. **`services/payment_service.py`**: Tích hợp API cổng thanh toán bên thứ ba (Stripe/PayPal/VNPay).
26. **`validators/order_validator.py`**: Xác thực số lượng đặt hàng, thông tin giao hàng.
27. **`utils/error_handler.py`**: Đăng ký handler bắt các ngoại lệ (Exceptions) và trả về response JSON chuẩn hóa.
28. **`tests/test_user.py`**: Chạy Unit test / Integration test cho API người dùng.
29. **`tests/test_product.py`**: Chạy test kiểm tra logic sản phẩm và cache.
30. **`tests/test_order.py`**: Chạy test cho quy trình thanh toán và tạo đơn hàng.
31. **`tests/conftest.py`**: Tạo dữ liệu giả lập (Fixtures) và cấu hình môi trường chạy Test chung.

---

## 4. Logic Toàn Bộ Mã Nguồn (System Architecture & Logic)

1. **Khởi tạo (Startup Phase)**:
   - `main.py` chạy -> `env_loader.py` nạp cấu hình -> `config.py` đọc cấu hình -> `database.py` kết nối cơ sở dữ liệu và áp dụng migration qua `db_migrations.py`.
2. **Xử lý Luồng Yêu cầu (Request Execution Flow)**:
   - Request từ client gửi tới `app.py`.
   - Chạy qua **`logging_middleware.py`** để ghi nhận dữ liệu đầu vào.
   - Chạy qua **`auth_middleware.py`** để xác thực JWT (thông qua `jwt_helper.py`).
   - Request tới Router tương ứng trong **Controller** (User / Product / Order).
3. **Xử lý Dữ liệu & Business Logic**:
   - Controller chuyển request sang **Validator** để kiểm tra định dạng dữ liệu đầu vào.
   - Nếu hợp lệ, Controller gọi **Service**.
   - **Service** thực hiện logic chính (gọi `hash_helper.py` mã hóa password, gọi `cache_service.py` để lấy cache, hoặc gọi `payment_service.py` để giao tiếp bên thứ 3).
   - **Service** gọi **Repository** tương ứng để tương tác với DB (`db_models.py`).
4. **Trả kết quả & Bắt lỗi**:
   - Dữ liệu được trả ngược lại qua Service -> Controller -> Client.
   - Nếu xảy ra sự cố ở bất kỳ giai đoạn nào, `error_handler.py` sẽ bắt Exception và phản hồi JSON mã lỗi thích hợp.

---
---

# 🇬🇧 English

## 1. Project Overview & CHISAKI167
This project is built using a modular architecture consisting of **31 core files**, maintaining clear separation of concerns ranging from configuration, database management, backend services, controller APIs, to testing scripts.

Author Tag / Watermark: **CHISAKI167**

---

## 2. File Directory & Dependency Structure

The flow diagram below represents how files initialize, import, and invoke one another:

```text
[1] main.py (Main Application Entry)
 │
 ├──> [2] config.py (Loads Application Configurations)
 │     └──> [3] env_loader.py (Parses .env file variables)
 │
 ├──> [4] database.py (Establishes Database Connections)
 │     ├──> [5] db_models.py (Defines ORM Data Models)
 │     └──> [6] db_migrations.py (Handles DB Schema Migrations)
 │
 ├──> [7] app.py (Initializes Web Server / Framework App)
 │     │
 │     ├──> [8] middleware/auth_middleware.py (Request Authentication)
 │     │     └──> [9] utils/jwt_helper.py (JWT Encode/Decode Utilities)
 │     │
 │     ├──> [10] middleware/logging_middleware.py (Logs Request Metadata)
 │     │     └──> [11] utils/logger.py (Configures Logger Output)
 │     │
 │     ├──> [12] controllers/user_controller.py (User Routes)
 │     │     ├──> [13] services/user_service.py (User Business Logic)
 │     │     │     ├──> [14] repositories/user_repo.py (User Database Queries)
 │     │     │     └──> [15] utils/hash_helper.py (Password Hashing)
 │     │     └──> [16] validators/user_validator.py (User Request Validation)
 │     │
 │     ├──> [17] controllers/product_controller.py (Product Routes)
 │     │     ├──> [18] services/product_service.py (Product Business Logic)
 │     │     │     ├──> [19] repositories/product_repo.py (Product Database Queries)
 │     │     │     └──> [20] services/cache_service.py (Redis/Memcached Layer)
 │     │     └──> [21] validators/product_validator.py (Product Data Validation)
 │     │
 │     └──> [22] controllers/order_controller.py (Order Routes)
 │           ├──> [23] services/order_service.py (Order Business Logic)
 │           │     ├──> [24] repositories/order_repo.py (Order Database Queries)
 │           │     └──> [25] services/payment_service.py (Payment Gateway)
 │           └──> [26] validators/order_validator.py (Order Data Validation)
 │
 ├──> [27] utils/error_handler.py (Global Exception Handling)
 │
 └──> [28] tests/test_user.py (User Module Unit Tests)
       ├──> [29] tests/test_product.py (Product Module Unit Tests)
       ├──> [30] tests/test_order.py (Order Module Unit Tests)
       └──> [31] tests/conftest.py (Pytest Fixtures & Shared Configs)
```

---

## 3. Detailed File Functions & Capabilities

1. **`main.py`**: Entry point of the application. Triggers config parsing, DB connection initialization, and starts the server in `app.py`.
2. **`config.py`**: Loads central configuration settings (Ports, DB Connection String, Secrets) utilizing `env_loader.py`.
3. **`env_loader.py`**: Parses `.env` variables and validates essential system parameters.
4. **`database.py`**: Initializes the database engine, manages connection pooling, and handles sessions.
5. **`db_models.py`**: Contains ORM entity definitions mapped to database tables.
6. **`db_migrations.py`**: Handles database schema migrations (upgrades/downgrades).
7. **`app.py`**: Registers middlewares, imports controllers/routes, and exposes the app instance.
8. **`middleware/auth_middleware.py`**: Intercepts requests to validate JWT headers via `jwt_helper.py`.
9. **`utils/jwt_helper.py`**: Helper functions `generate_token()` and `decode_token()` for JWT operations.
10. **`middleware/logging_middleware.py`**: Intercepts requests to log response times, request paths, and client IPs.
11. **`utils/logger.py`**: Formats logs and sets up console/file output streams.
12. **`controllers/user_controller.py`**: Exposes HTTP endpoints for user registration, authentication, and profiles.
13. **`services/user_service.py`**: Executes business rules for user management (password checking, account creation).
14. **`repositories/user_repo.py`**: Handles direct SQL/NoSQL CRUD operations on user tables.
15. **`utils/hash_helper.py`**: Provides `hash_password()` and `verify_password()` utility functions using secure hashing algorithms.
16. **`validators/user_validator.py`**: Validates incoming payload schemas (email formats, password strength).
17. **`controllers/product_controller.py`**: Exposes HTTP endpoints for listing, creating, and modifying products.
18. **`services/product_service.py`**: Core product domain logic; integrates with caching to accelerate read speeds.
19. **`repositories/product_repo.py`**: Direct database queries for retrieving and mutating product data.
20. **`services/cache_service.py`**: Encapsulates cache operations (`get_cache`, `set_cache`) using Redis.
21. **`validators/product_validator.py`**: Validates product inputs (ensuring non-negative pricing, required fields).
22. **`controllers/order_controller.py`**: Exposes endpoints for placing orders and fetching order history.
23. **`services/order_service.py`**: Coordinates order placement: verifies stock, calculates totals, calls `payment_service.py`.
24. **`repositories/order_repo.py`**: Inserts and retrieves order transaction records in the database.
25. **`services/payment_service.py`**: Handles third-party payment gateway integration (Stripe/PayPal APIs).
26. **`validators/order_validator.py`**: Validates order payloads, quantities, and delivery details.
27. **`utils/error_handler.py`**: Catches unhandled exceptions globally and formats standard JSON error responses.
28. **`tests/test_user.py`**: Contains automated tests covering user controller and service logic.
29. **`tests/test_product.py`**: Contains unit and integration tests for product management and caching.
30. **`tests/test_order.py`**: End-to-end testing for order processing and payment integrations.
31. **`tests/conftest.py`**: Defines reusable pytest fixtures and test database instances.

---

## 4. Overall Code Logic & Execution Flow

1. **Bootstrap Phase**:
   - `main.py` is invoked -> `env_loader.py` parses environmental parameters -> `config.py` initializes config -> `database.py` connects to the DB and applies migrations via `db_migrations.py`.
2. **Request Processing Flow**:
   - Client sends an HTTP Request to `app.py`.
   - The request passes through **`logging_middleware.py`** to capture metric data.
   - The request passes through **`auth_middleware.py`** to verify token validity via `jwt_helper.py`.
   - The request is routed to the designated **Controller** (User / Product / Order).
3. **Data Handling & Business Logic**:
   - The Controller forwards request data to the **Validator** for schema validation.
   - Upon success, the Controller invokes the **Service** layer.
   - The **Service** processes business logic (hashes secrets via `hash_helper.py`, interacts with `cache_service.py`, or communicates externally using `payment_service.py`).
   - The **Service** calls the respective **Repository** to query/mutate database entities (`db_models.py`).
4. **Response & Exception Flow**:
   - Data flows backward through Repository -> Service -> Controller -> Client Response.
   - Any unhandled exceptions at any layer are caught by **`error_handler.py`**, delivering standardized JSON error responses to the client.