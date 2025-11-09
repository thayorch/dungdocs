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
### How to input ??
Scanner คือคลาสในภาษา Java ที่ใช้สำหรับรับข้อมูลจากผู้ใช้ (input) หรืออ่านข้อมูลจากแหล่งต่างๆ
``` java
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in());
        String name = sc.nextLine();
        System.out.println("Hello " + name);
    }
}
```
- Medthod ที่ใช้บ่อย

| Medthod | ใช้กับtype |
|--------- |------------:|
| nextLine()   | อ่าน`string`ทั้งบรรทัด |
| next()       | อ่าน`string`เดียว (จนถึงช่องว่าง) |
| nextInt()    | อ่านตัวเลขจำนวนเต็ม(`int`) |
| nextDouble() | อ่านตัวเลขทศนิยม (`double`)|
| nextBoolean() | อ่านค่า `true` `false` |




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
### Operators
| Operator | Name | Example |
|--------- |--------|----:|
|+| Addition | x + y |
|-| Subtraction | x - y |
|*| Multiplication | x * y |
|/| Division | x / y |
|%| Modulus | x % y |
|++| Increment |` x++`, `++x`|
|--| Decrement | `x--` , `--x`|
|==| Equal to	 | 	x == y |
|!=| Not equal | x != y |
|>| 	Greater than | x > y |
|<| Less than | x < y |
|>=| Greater than or equal to | x >= y |
|<=| Less than or equal to | x <= y |
|&& | Logical and | 	x < 5 &&  x < 10 |
| \|\| | Logical or| 	x < 5 || x < 4 |
|!| Logical not | !(x < 5 && x < 10) |

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

- Medthod หรือ Function เป็น
``` java
public static int add(int a, int b){
    return a + b;
}

public static void main(String[] args){
    System.out.println(add(5,3));
}
```
- ประเภทของ Method ในภาษา Java

### Method แบ่งตามค่าที่ Return (Return Type)
- void - ไม่คืนค่า
```java
public static void sayHello() {
    System.out.println("Hello!");
    // ไม่มี return หรือใช้ return; เฉยๆ
}

public static void main(String[] args) {
    sayHello(); // เรียกใช้แต่ไม่ได้รับค่ากลับมา
}
```
- int - คืนค่าจำนวนเต็ม
```java
public static int add(int a, int b) {
    return a + b; // ต้อง return ค่าที่เป็น int
}

public static void main(String[] args) {
    int result = add(5, 3); // รับค่า 8
    System.out.println(result);
}
```
-  double - คืนค่าทศนิยม
```java
public static double divide(double a, double b) {
    return a / b;
}

public static void main(String[] args) {
    double result = divide(10.0, 3.0); // รับค่า 3.333...
    System.out.println(result);
}
```

- boolean - คืนค่า true/false
```java
public static boolean isEven(int number) {
    return number % 2 == 0;
}

public static void main(String[] args) {
    boolean check = isEven(4); // รับค่า true
    System.out.println(check);
}
```
- String - คืนค่าข้อความ
```java
public static String getGreeting(String name) {
    return "สวัสดี " + name;
}

public static void main(String[] args) {
    String message = getGreeting("โจ");
    System.out.println(message); // สวัสดี โจ
}
```

### Method แบ่งตาม static และ non-static

- static method - เรียกใช้ผ่านชื่อคลาสโดยตรง
```java
public class Calculator {
    public static int multiply(int a, int b) {
        return a * b;
    }
    
    public static void main(String[] args) {
        // เรียกใช้โดยไม่ต้องสร้าง object
        int result = Calculator.multiply(5, 3);
        System.out.println(result);
    }
}
```

- non-static method - ต้องสร้าง object ก่อนเรียกใช้
```java
public class Calculator {
    public int subtract(int a, int b) { // ไม่มี static
        return a - b;
    }
    
    public static void main(String[] args) {
        Calculator calc = new Calculator(); // ต้องสร้าง object
        int result = calc.subtract(10, 3);
        System.out.println(result); // 7
    }
}
```




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

### `this` keyword
เป็นคำสั่งที่ใช้อ้างอิงถึง Object ปัจจุบัน (Current Instance) ของ Class
#### ตัวอย่างการใช้งาน
- แยก Attribute กับ Parameterเมื่อใช้เมื่อชื่อ parameter ซ้ำกับชื่อ attribute
```java
class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;  // this.name = attribute, name = parameter
        this.age = age;    // this.age = attribute, age = parameter
    }
    
    public void setName(String name) {
        this.name = name;  // แยก attribute กับ parameter
    }
    
    public void setAge(int age) {
        this.age = age;
    }
    
    public void display() {
        System.out.println("Name: " + this.name);
        System.out.println("Age: " + this.age);
    }
}

public class Main {
    public static void main(String[] args) {
        Person p = new Person("สมชาย", 25);
        p.display();
        
        p.setName("สมหญิง");
        p.setAge(30);
        p.display();
    }
}
```

**Output:**
```
Name: สมชาย
Age: 25
Name: สมหญิง
Age: 30
```


- เรียก Constructor อื่นใน Class เดียวกัน (Constructor Chaining)
```java
class Student {
    private String name;
    private int age;
    private String major;
    
    // Constructor 1 - รับแค่ name
    public Student(String name) {
        this(name, 18);  // เรียก Constructor 2
        System.out.println("Constructor 1");
    }
    
    // Constructor 2 - รับ name และ age
    public Student(String name, int age) {
        this(name, age, "ไม่ระบุ");  // เรียก Constructor 3
        System.out.println("Constructor 2");
    }
    
    // Constructor 3 - รับทุก parameter (Main Constructor)
    public Student(String name, int age, String major) {
        this.name = name;
        this.age = age;
        this.major = major;
        System.out.println("Constructor 3 (Main)");
    }
    
    public void display() {
        System.out.println("Name: " + this.name);
        System.out.println("Age: " + this.age);
        System.out.println("Major: " + this.major);
    }
}

public class Main {
    public static void main(String[] args) {
        System.out.println("=== Student 1 ===");
        Student s1 = new Student("John");
        s1.display();
        
        System.out.println("\n=== Student 2 ===");
        Student s2 = new Student("Alice", 20);
        s2.display();
        
        System.out.println("\n=== Student 3 ===");
        Student s3 = new Student("Bob", 22, "Computer Science");
        s3.display();
    }
}
```

**Output:**
```
=== Student 1 ===
Constructor 3 (Main)
Constructor 2
Constructor 1
Name: John
Age: 18
Major: ไม่ระบุ

=== Student 2 ===
Constructor 3 (Main)
Constructor 2
Name: Alice
Age: 20
Major: ไม่ระบุ

=== Student 3 ===
Constructor 3 (Main)
Name: Bob
Age: 22
Major: Computer Science
```

- เรียก Method ใน Class เดียวกัน
```java
class Calculator {
    private int result;
    
    public Calculator(int initial) {
        this.result = initial;
    }
    
    public void add(int value) {
        this.result += value;
        this.showResult();  // เรียก method ด้วย this
    }
    
    public void subtract(int value) {
        this.result -= value;
        this.showResult();  // เรียก method ด้วย this
    }
    
    public void multiply(int value) {
        this.result *= value;
        this.showResult();  // เรียก method ด้วย this
    }
    
    private void showResult() {
        System.out.println("Result: " + this.result);
    }
    
    public int getResult() {
        return this.result;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator(10);
        calc.add(5);
        calc.multiply(2);
        calc.subtract(3);
    }
}
```

**Output:**
```
Result: 15
Result: 30
Result: 27
```
- ส่ง Object ปัจจุบันเป็น Parameter
```java
class Student {
    private String name;
    private int score;
    
    public Student(String name, int score) {
        this.name = name;
        this.score = score;
    }
    
    public void compareWith(Student other) {
        System.out.println(this.name + " (คะแนน: " + this.score + ") เทียบกับ " 
                          + other.name + " (คะแนน: " + other.score + ")");
        
        if (this.score > other.score) {
            System.out.println(this.name + " คะแนนสูงกว่า");
        } else if (this.score < other.score) {
            System.out.println(other.name + " คะแนนสูงกว่า");
        } else {
            System.out.println("คะแนนเท่ากัน");
        }
    }
    
    public void enrollInClass(ClassRoom classroom) {
        classroom.addStudent(this);  // ส่ง object ปัจจุบันเป็น parameter
    }
}

class ClassRoom {
    private String roomName;
    
    public ClassRoom(String roomName) {
        this.roomName = roomName;
    }
    
    public void addStudent(Student student) {
        System.out.println("เพิ่มนักเรียนเข้าห้อง " + this.roomName);
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student("John", 85);
        Student s2 = new Student("Alice", 90);
        
        s1.compareWith(s2);
        
        System.out.println();
        
        ClassRoom room = new ClassRoom("A101");
        s1.enrollInClass(room);
    }
}
```

**Output:**
```
John (คะแนน: 85) เทียบกับ Alice (คะแนน: 90)
Alice คะแนนสูงกว่า

เพิ่มนักเรียนเข้าห้อง A101
```
- Return Object ปัจจุบัน (Method Chaining)
```java
class StringBuilder {
    private String text;
    
    public StringBuilder(String initial) {
        this.text = initial;
    }
    
    public StringBuilder append(String str) {
        this.text += str;
        return this;  // return object ปัจจุบัน
    }
    
    public StringBuilder toUpperCase() {
        this.text = this.text.toUpperCase();
        return this;  // return object ปัจจุบัน
    }
    
    public StringBuilder reverse() {
        this.text = new java.lang.StringBuilder(this.text).reverse().toString();
        return this;  // return object ปัจจุบัน
    }
    
    public void print() {
        System.out.println(this.text);
    }
}

public class Main {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("Hello");
        
        // Method Chaining - เรียกต่อเนื่องได้เพราะ return this
        sb.append(" World")
          .append("!")
          .toUpperCase()
          .print();
        
        sb.reverse().print();
    }
}
```

**Output:**
```
HELLO WORLD!
!DLROW OLLEH
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

Encapsulation เป็นการซ่อนข้อมูลภายใน Class และควบคุมการเข้าถึงผ่าน Methods (Getter/Setter)
### - ทำไมต้องใช้ Encapsulation?
- ปกป้องข้อมูล - ป้องกันการแก้ไขข้อมูลโดยตรงที่อาจผิดพลาด
- ควบคุมการเข้าถึง - กำหนดเงื่อนไขในการตั้งค่าหรืออ่านข้อมูล
- ซ่อนรายละเอียด - ผู้ใช้ไม่ต้องรู้โครงสร้างภายใน
- แก้ไขง่าย - เปลี่ยนแปลงภายในโดยไม่กระทบโค้ดภายนอก
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

Inheritance เป็นการสร้าง Class ใหม่จาก Class เดิมโดยสืบทอดคุณสมบัติ (attributes) และพฤติกรรม (methods)

- Parent Class / Super Class = คลาสแม่ (ถูกสืบทอด)
- Child Class / Sub Class = คลาสลูก (สืบทอด)
- ใช้คำสั่ง extends

### ประโยชน์
- ลดการเขียนโค้ดซ้ำ - ใช้โค้ดจาก Parent Class
- จัดระเบียบ - จัดกลุ่มคลาสที่เกี่ยวข้อง
- ขยายฟังก์ชัน - เพิ่มความสามารถใหม่ให้กับ Child Class

``` java
class Animal {
    void sound(){ 
        System.out.println("???"); 
    }
}

class Cat extends Animal {
    void sound(){ 
        System.out.println("Meow"); 
    }
}
```
### `super` keyword
เป็นคำสั่งที่ใช้อ้างอิงถึง Parent Class (Super Class) จากภายใน Child Class
```java
class Animal {
    String name;
    int age;
    
    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
        System.out.println("Animal constructor: " + name);
    }
}

class Cat extends Animal {
    String color;
    
    public Cat(String name, int age, String color) {
        super(name, age);  // เรียก constructor ของ Animal (ต้องอยู่บรรทัดแรก!)
        this.color = color;
        System.out.println("Cat constructor: " + name);
    }
}

public class Main {
    public static void main(String[] args) {
        Cat cat = new Cat("Milu", 2, "White");
    }
}
```

**Output:**
```
Animal constructor: Milu
Cat constructor: Milu
```


##  11. Class Relationship
    - 1. Association (รู้จักกันทั่วไป) ความสัมพันธ์แบบหลวมๆ - Class หนึ่งใช้งาน Class อื่น
```java
class Teacher {
    String name;
    
    public Teacher(String name) {
        this.name = name;
    }
    
    public void teach(Student student) {
        System.out.println(name + " สอน " + student.name);
    }
}

class Student {
    String name;
    
    public Student(String name) {
        this.name = name;
    }
}

public class Main {
    public static void main(String[] args) {
        Teacher teacher = new Teacher("อาจารย์สมชาย");
        Student student = new Student("นักเรียนโจ");
        
        teacher.teach(student);
        // ครูและนักเรียนมีชีวิตแยกกัน สามารถดำรงอยู่โดยไม่ต้องพึ่งพากัน
    }
}    
```

- Aggregation (เป็นส่วนหนึ่ง - แยกได้)
```java
class Department {
    String name;
    
    public Department(String name) {
        this.name = name;
    }
}

class University {
    String name;
    Department[] departments;
    
    public University(String name, Department[] departments) {
        this.name = name;
        this.departments = departments;
    }
    
    public void showDepartments() {
        System.out.println(name + " มีภาควิชา:");
        for (Department dept : departments) {
            System.out.println("- " + dept.name);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        // Department สามารถอยู่ได้โดยไม่ต้องมี University
        Department cs = new Department("วิทยาการคอมพิวเตอร์");
        Department eng = new Department("วิศวกรรม");
        
        Department[] depts = {cs, eng};
        University uni = new University("มหาวิทยาลัยXYZ", depts);
        uni.showDepartments();
        
        // ถ้า University ถูกลบ Department ยังคงอยู่
    }
}
```

- Composition (เป็นส่วนหนึ่ง - แยกไม่ได้)
```java
class Engine {
    int horsepower;
    
    public Engine(int hp) {
        this.horsepower = hp;
        System.out.println("สร้างเครื่องยนต์ " + hp + " แรงม้า");
    }
    
    public void start() {
        System.out.println("เครื่องยนต์ติด");
    }
}

class Car {
    String model;
    Engine engine; // Composition
    
    public Car(String model, int hp) {
        this.model = model;
        this.engine = new Engine(hp); // สร้าง Engine ภายใน Car
        System.out.println("สร้างรถ " + model);
    }
    
    public void drive() {
        engine.start();
        System.out.println(model + " กำลังวิ่ง");
    }
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car("Toyota Camry", 200);
        myCar.drive();
        
        // ถ้า Car ถูกลบ (ทำลาย) Engine ก็จะถูกลบด้วย
        // Engine ไม่สามารถอยู่ได้โดยไม่มี Car
    }
}
```
- Inheritance (สืบทอด)
```java
// Vehicle IS-A general concept
class Vehicle {
    void move() {
        System.out.println("ยานพาหนะเคลื่อนที่");
    }
}

// Car IS-A Vehicle
class Car extends Vehicle {
    @Override
    void move() {
        System.out.println("รถวิ่งบนถนน");
    }
}

// Boat IS-A Vehicle
class Boat extends Vehicle {
    @Override
    void move() {
        System.out.println("เรือแล่นในน้ำ");
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle v1 = new Car();  // Car IS-A Vehicle
        Vehicle v2 = new Boat(); // Boat IS-A Vehicle
        
        v1.move();
        v2.move();
    }
}
```
  |Type          |Meaning
  |------------- |---------------------------
  |Association   |รู้จักกันทั่วไป
  |Aggregation   |เป็นส่วนหนึ่ง (แยกกันได้)
  |Composition   |เป็นส่วนหนึ่ง (แยกไม่ออก)
  |Inheritance   |สืบทอด


##  12. Polymorphism
Polymorphism "หลายรูปแบบ" - ความสามารถของ Object ที่สามารถแสดงพฤติกรรมต่างกันแม้ใช้ Interface เดียวกัน
### ประเภทของ Polymorphism
- Compile-time Polymorphism (Method Overloading)
```java
class Calculator {
    // Method เดียวกัน แต่ parameter ต่างกัน
    
    int add(int a, int b) {
        return a + b;
    }
    
    int add(int a, int b, int c) {
        return a + b + c;
    }
    
    double add(double a, double b) {
        return a + b;
    }
    
    String add(String a, String b) {
        return a + " " + b;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        
        System.out.println(calc.add(5, 3));           // 8
        System.out.println(calc.add(5, 3, 2));        // 10
        System.out.println(calc.add(5.5, 3.2));       // 8.7
        System.out.println(calc.add("Hello", "World")); // Hello World
    }
}
```
- Runtime Polymorphism (Method Overriding)
```java
class Animal {
    void sound() {
        System.out.println("สัตว์ส่งเสียง");
    }
    
    void move() {
        System.out.println("สัตว์เคลื่อนที่");
    }
}

class Cat extends Animal {
    @Override
    void sound() {
        System.out.println("Meow!");
    }
    
    @Override
    void move() {
        System.out.println("แมววิ่ง");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Woof!");
    }
    
    @Override
    void move() {
        System.out.println("หมาวิ่ง");
    }
}

class Bird extends Animal {
    @Override
    void sound() {
        System.out.println("Tweet!");
    }
    
    @Override
    void move() {
        System.out.println("นกบิน");
    }
}

public class Main {
    public static void main(String[] args) {
        // Polymorphism: ตัวแปรประเภท Animal เก็บ Object ประเภทลูกได้
        Animal a1 = new Cat();
        Animal a2 = new Dog();
        Animal a3 = new Bird();
        
        a1.sound(); // Meow!
        a1.move();  // แมววิ่ง
        
        a2.sound(); // Woof!
        a2.move();  // หมาวิ่ง
        
        a3.sound(); // Tweet!
        a3.move();  // นกบิน
    }
}
```

### ประโยชน์ของ Polymorphism
- Code Reusability - ใช้โค้ดซ้ำได้
- Flexibility - เพิ่ม Class ใหม่โดยไม่แก้โค้ดเดิม
- Maintainability - แก้ไขง่าย เปลี่ยนแปลงน้อย
- Extensibility - ขยายฟังก์ชันได้ง่าย

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