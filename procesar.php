<?php
// Configuración de respuesta
header("Content-Type: application/json");

// Verificar que la solicitud sea POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode([
        "status" => "error",
        "message" => "Solo se aceptan solicitudes POST"
    ]);
    exit;
}

// Validar que existan todos los campos requeridos
$campos_requeridos = ["nombre", "apellido", "email", "username", "password"];
foreach ($campos_requeridos as $campo) {
    if (!isset($_POST[$campo]) || empty($_POST[$campo])) {
        echo json_encode([
            "status" => "error",
            "message" => "El campo " . $campo . " es requerido"
        ]);
        exit;
    }
}

// Validar formato de email
if (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        "status" => "error",
        "message" => "El formato de email no es válido"
    ]);
    exit;
}

// Validar longitud de contraseña
if (strlen($_POST["password"]) < 6) {
    echo json_encode([
        "status" => "error",
        "message" => "La contraseña debe tener al menos 8 caracteres"
    ]);
    exit;
}

// Si todo está correcto, devolver respuesta positiva
echo json_encode([
    "status" => "success",
    "message" => "Usuario registrado correctamente"
]);
?>