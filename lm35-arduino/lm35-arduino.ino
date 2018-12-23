#define TEMP_SENSOR 0
#define LED_RED 9
#define LED_GREEN 8

void setup() {
  Serial.begin(9600);
  pinMode(LED_RED, OUTPUT);
  pinMode(LED_GREEN, OUTPUT);
}

int signalVoltage, celsiusTemp;

void loop() {
  // Señal análoga de 0 a 1023
  signalVoltage = analogRead(TEMP_SENSOR);

  // Convertir a temperatura en grados Celsius
  celsiusTemp = (5 * signalVoltage * 100) / 1024;

  // Imprimir en monitor serial
  Serial.println(celsiusTemp);

  // Encender y apagar LED si la temperatura es mayor a 26°C
  if (celsiusTemp > 26) {
    digitalWrite(LED_GREEN, LOW);
    digitalWrite(LED_RED, HIGH);  
  } else {
    digitalWrite(LED_GREEN, HIGH);
    digitalWrite(LED_RED, LOW); 
  }

  // Delay de 500 milisegundos
  delay(500);
}
