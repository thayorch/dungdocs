# Java Programming
In Computer Science CMU using the `java` in Intro to Object-Oriented Programming subject (CS114)


::: warning
`!Importance` **you must already setup environment**
:::
## 1. Get Started

###  Java คืออะไร?

Java เป็นภาษาโปรแกรมที่: - เป็น **High-level** - เป็น **Object-Oriented
(OOP)** - รันบน **JVM (Java Virtual Machine)** → ทำให้ **Write Once, Run
Anywhere** - มีระบบ **Garbage Collector** จัดการหน่วยความจำให้อัตโนมัติ

###  Build & Run

- Java version *lower* than `jdk23`

```sh
javac <filename>.java
java <filename>
```

- Java version *upper* than `jdk23`

```sh
java <filename>.java
```

##  2. Basic Java Syntax
### Main
``` java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```

###  Data Types

|  Type    |  Example   |
|--------- |------------:|
|  int     |  10        |
|  double  |  3.14      |
|  char    |  'A'       |
|  boolean |  true/false|
|  String  |  "Hello"   |

``` java
int age = 20;
double pi = 3.14;
float weight = 60.5f;
char A = 'A';
boolean isStudent = true;
String name = "Thadchanon";
```


##  3. Condition & Loop

###  if-else

``` java
if(age >= 20) {
    System.out.println("Adult");
} else if (age > 15 &&  < 20){
    System.out.println("Teens");
} else {
    System.out.println("Child");
}
```

### switch

```java
int day = 4;
switch (day) {
  case 1:
    System.out.println("Monday");
    break;
  case 2:
    System.out.println("Tuesday");
    break;
  case 3:
    System.out.println("Wednesday");
    break;
  case 4:
    System.out.println("Thursday");
    break;
  case 5:
    System.out.println("Friday");
    break;
  case 6:
    System.out.println("Saturday");
    break;
  case 7:
    System.out.println("Sunday");
    break;
}
```

###  for loop

``` java
for(int i = 0; i < 5; i++){
    System.out.println(i);
}
```

### while loop
- while() ..do{..}
``` java
int i = 0;
while (i < 5) {
  System.out.println(i);
  i++;
}
```
- do {..} while() ..

```java
int i = 0;
do {
  System.out.println(i);
  i++;
}
while (i < 5);
```

##  4. String & Array
###  String

``` java
String text = "Computer Science";
System.out.println(text.length());
System.out.println(text.toLowerCase());
```

###  Array
``` java
int[] nums = {1,2,3};
String[] names = {"Ice", "John"};

for(String n : names){
    System.out.println(n);
}
```


##  5. Method (Function)
###  นิยามและเรียกใช้งานเมธอด

``` java
public static int add(int a, int b){
    return a + b;
}

public static void main(String[] args){
    System.out.println(add(5,3));
}
```


# 🧠 Object-Oriented Programming (OOP)
##  6. Class & Object

Class = พิมพ์เขียว \| Object = สิ่งที่สร้างจากพิมพ์เขียว

``` java
class Cat {
    String name;
    int age;
    void sayHi(){
        System.out.println("Hi I'm " + name);
    }
}

public class Main {
    public static void main(String[] args) {
        Cat c = new Cat();
        c.name = "Milu";
        c.sayHi();
    }
}
```

##  7. Constructor & Destructor

###  Constructor (ถูกเรียกตอนสร้าง Object)

``` java
class Dog {
    String name;
    Dog(String n){
        name = n;
        System.out.println("Dog created: " + name);
    }
}
```

###  Destructor → Java ไม่มี แต่ใช้ Garbage Collector แทน

``` cpp
    // Example from CPP
    // Constructor
    MyClass(int size) {
        data = new int[size];
    }
    // Destructor
    ~MyClass() {
        delete[] data; 
        data = nullptr;
    }
```

:::tip
**Garbage Collector** : การสร้าง Destructor โดยอัตโนมัติ
:::

##  8. Encapsulation

ซ่อนข้อมูลด้วย private และเข้าถึงผ่าน getter/setter

``` java
class Bank {
    private int balance;

    public void setBalance(int b){
        balance = b;
    }
    public int getBalance(){
        return balance;
    }
}
```


##  9. Method Overloading

ชื่อ method เหมือนกัน แต่ parameter ต่างกัน

``` java
class MathTool {
    int add(int a, int b){ return a+b; }
    double add(double a, double b){ return a+b; }
}
```


##  10. Inheritance

การสืบทอดคุณสมบัติ

``` java
class Animal {
    void sound(){ System.out.println("???"); }
}

class Cat extends Animal {
    void sound(){ System.out.println("Meow"); }
}
```

##  11. Class Relationship

  |Type          |Meaning
  |------------- |---------------------------
  |Association   |รู้จักกันทั่วไป
  |Aggregation   |เป็นส่วนหนึ่ง (แยกกันได้)
  |Composition   |เป็นส่วนหนึ่ง (แยกไม่ออก)
  |Inheritance   |สืบทอด


##  12. Polymorphism

###  Runtime (Override)

``` java
Animal a = new Cat();
a.sound(); // Meow
```

###  Compile-time (Overload)

``` java
add(int, int)
add(double, double)
```

##  13. Generics

ทำ class รองรับหลาย type

``` java
class Box<T> {
    T data;
    void set(T d){ data = d; }
    T get(){ return data; }
}
```

``` java
Box<String> b = new Box<>();
b.set("Hello");
System.out.println(b.get());
```


##  14. Principles of OOP

  |Principle       | Meaning               |
  |---------------| ------------------------:|
  |Encapsulation  | ซ่อนข้อมูล                |
  |Inheritance    | สืบทอด                   |
  |Polymorphism   | หลายรูปแบบ            |
  |Abstraction    | ซ่อนการทำงานที่ซับซ้อน|