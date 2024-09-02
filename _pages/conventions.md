---
permalink: /conventions/
title: מוסכמות (קונבנציות)
---

בדף זה ניתן למצוא רשימה של כמה כללים נפוצים ב-Java שהם בגדר **מוסכמות (קונבנציות)** - כללים שהם לא מחייבים, אבל מאוד רצוי לשמור עליהם כדי שהקוד יהיה קל יותר לקריאה ולתחזוקה.

הדף הזה לא גמור (וכנראה תמיד יהיה work in progress), והוא כולל גם מונחים שלא בהכרח הגעתי אליהם בבלוג או בשיעורים שאני מעביר ב-Ladies FIRST.

{:.notice}

מבוסס באופן כללי על רשימת הקונבנציות של גוגל ל-Java, שניתן למצוא [כאן](https://google.github.io/styleguide/javaguide.html). רוב הכללים מוסכמים באופן אוניברסלי ולא רק על ידי גוגל, אבל יש אזורים שבהם ההסכמה לא אוניברסלית, ובחלקם החלטתי לחרוג קצת מהכללים של גוגל, ובמקום זה להציג כללים שאני עובד איתם בדרך כלל. השתדלתי לסמן באופן ברור איפה אני חורג מהכללים של גוגל.

# שמות

**ראשית כל - הכלל החשוב ביותר לגבי שמות משתנים - שמות משתנים צריכים להיות משמעותיים.** המקרים היחידים בהם מותרים שמות לא משמעותיים:

* אם המשתנה "מופיע" רק לחלק קטן של הקוד, למשל לא יותר מחמש שורות
* משתנה לולאת for שעוברת על מספרים שלמים (לרוב במקרים אלה נשתמש בשם `i`, ואם יש בו לולאה מקוננת, אז `j` יהיה בלולאה הפנימית). גם במקרה זה, אם הלולאה ארוכה יותר מאשר כמה שורות, רצוי ללכת על שם משמעותי יותר מאשר `i` או `j`.
* בקוד לדוגמא לצרכים לימודיים (או במילים אחרות, כן, ל"מורה" מותר מה שאסור לתלמיד)

יש ארבעה סגנונות של שמות ב-Java שבהם משתמשים לדברים שונים.

## camelCase (ידוע גם כ-lower camel case)

בסגנון זה המילה הראשונה מתחילה באות קטנה, וכל מילה חדשה אחריה (אם יש כאלה) מתחילה באות גדולה.

משתמשים בכך למשתנים, לשדות (תכונות) ולפונקציות. דוגמאות לשמות ב-camelCase:

```
speed
forwardSpeed
gyroAngleRadians
isActive
name
```

## PascalCase (ידוע גם כ-upper camel case)

בסגנון זה המילה הראשונה מתחילה באות גדולה, וכך גם כל מילה חדשה אחריה (אם יש כאלה). משתמשים בכך לשמות של **טיפוסים, למעט פרימיטיביים. כלומר - מחלקות, ממשקים, ו-enum-ים**. דוגמאות:

```
Direction
MotorController
CommandBase
DoubleConsumer
```

## lower_snake_case

בסגנון זה כל המילים באותיות קטנות והן מופרדות בקו תחתון. משתמשים בסגנון זה לחבילות (package), שהן התיקיות בהן אנחנו שמים את קבצי ה-Java. הנה דוגמה לעץ אפשרי של תיקיות שעומד בכלל הזה (הדוגמא לא נועדה להיות ריאליסטית והיא רק כדי להבהיר את כללי שמות החבילות):

```
+ frc
-- + robot
-- -- + subsystems
-- -- -- - DriveTrain.java
-- -- -- - ArmUpperJoint.java
-- -- -- - ArmLowerJoint.java
-- -- + commands
-- -- -- + drivetrain
-- -- -- -- - DriveCommand.java
-- -- -- + arm_upper_joint
-- -- -- -- - MoveArmUpperJoint.java
-- -- -- + arm_lower_joint
-- -- -- -- - MoveArmLowerJoint.java
-- -- + oi
-- -- -- - DriverController.java
-- -- -- - OperatorController.java
-- -- - Main.java
-- -- - Robot.java
-- -- - RobotContainer.java
```

אז למשל המחלקה MoveArmLowerJoint נמצאת בחבילה `frc.robot.commands.arm_lower_joint`

{:.notice}

אצל גוגל, המוסכמה היא שאין הפרדה בין מילים שונות בשם של מחלקה. כך שלפי הכללים של גוגל, במקום arm_upper_joint היינו כותבים armupperjoint.

## UPPER_SNAKE_CASE

בסגנון זה כל המילים כתובות באותיות גדולות, ומופרדות בקו תחתון. בזה משתמשים לקבועים סטטיים (static final):

```java
public class RobotConstants {
    public static final double WHEEL_DIAMETER_CM = 10.4;
}
```

## סיכום - מתי כל סגנון שם

| סגנון שם         | דוגמאות                     | על מה להשתמש בסגנון הזה   |
| ---------------- | --------------------------- | ------------------------- |
| camelCase        | name, teamName              | פונקציות, משתנים, תכונות  |
| PascalCase       | Sensor, TeamCaptain         | מחלקות, ממשקים, enums     |
| lower_snake_case | subsystems, arm_upper_joint | חבילות                    |
| UPPER_SNAKE_CASE | WHEEL_DIAMETER_CM, VOTLAGE  | קבועים סטטיים פרימיטיביים |

## הסימון ההונגרי - מיותר

ישנו סגנון שמות ישן שמכונה, בין השאר, [הסימון ההונגרי](https://en.wikipedia.org/wiki/Hungarian_notation), ובו מוסיפים אות ראשונה לשדות (תכונות) שנקבעת לפי המשמעות או הטיפוס של השדה. זהו הסגנון שבו WPI משתמשים בקוד שלהם, כך שמי שיסתכל בתוך הקופסה שחורה ימצא שם שמות כמו `m_initActions.` כך גם בדוגמאות של WPI לקוד (קראו על הדוגמאות ואיך להשתמש בהן [בלינק הזה](https://docs.wpilib.org/en/stable/docs/software/examples-tutorials/wpilib-examples.html)). מהסיבות האלה היה חשוב שאציין מהו הסימון ההונגרי, כי ייתכן שתיתקלו בו.

יש כאלה שמוסיפים קו תחתון אחרי האות הזו, כמו WPI (לדוגמא `m_initActions`) ויש שלא מוסיפים אותו (אם WPI היו משתמשים בסגנון זה הם היו כותבים `mInitActions`).

כך או כך, הסימון ההונגרי הוא קצת מיושן, הוא פחות מקובל היום ממה שהיה פעם, ולמרות ש-WPI משתמשים בו, אני ממליץ להימנע ממנו ([וכך גם גוגל](https://google.github.io/styleguide/javaguide.html#s5.1-identifier-names)).

## כללים נוספים

### שמות של בוליאנים

משתנים בוליאנים ותכונות בוליאניות לא צריכות להכיל או לכלול את המילים is או are. כמו כן, פונקציות getter של תכונות בוליאניות צריכים לכלול את המילה is או are במקום get. לדוגמה, נניח שיש לנו מחלקה בשם KidsSafety שמייצגת מנגנון בטיחות, שאם הוא מופעל, כל המהירויות ברובוט מופחתות על ידי כפל בקבוע (למשל אם אנחנו רוצים לאפשר לילדים לנהוג ברובוט) - 

קוד לא נכון:

```java
public class KidsSafety {
    private boolean isOn; // ❎ wrong name for property
    
    // ...
    
    public boolean getIsOn() { // ❎ wrong name for boolean getter
        return isOn;
    }
    
    // ...
}
```

קוד כן נכון:

```java
public class KidsSafety {
    private boolean on; // ✅ correct name for property
    
    // ...
    
    public boolean isOn() { // ✅ correct name for boolean getter
        return on;
    }
    
    // ...
}
```

# סוגריים מסולסלים

החשיבות של המוסכמות האלה יותר נמוכה מאשר, למשל, שמות משתנים, אבל עדיין כדאי להכיר אותן ולהקפיד עליהן.

## הפותח

סוגר-**פותח** של סוגריים מסולסלים יהיה באותה שורה בה המבנה שאותו הוא פותח, ולא מקבל שורה משל עצמו. כלומר, הקוד הבא נכון:

```java
if(year % 4 == 0) {
    System.out.println("Olympic games year");
}
```

והבא אינו נכון:

```java
if(year % 4 == 0)
{
    System.out.println("Olympic games year");
}
```

(לידיעה כללית, יש שפות, למשל סי-שארפ, שבהן זה הפוך - הסוגר הפותח צריך לקבל שורה משל עצמו)

## הסוגר

סוגר-**סוגר** של סוגריים מסולסלים יהיה בשורה משל עצמו, כלומר הקוד הבא נכון:

```java
if(year % 4 == 0) {
    System.out.println("Olympic games year");
}
System.out.println("Year: " + year);
```

והבא אינו נכון:

```java
if(year % 4 == 0) {
    System.out.println("Olympic games year");
} System.out.println("Year: " + year);
```

### למעט במקרה אחד

יש יוצא מן הכלל אחד לכלל הזה - במקרה של `else` או `else if`, הסוגר הסוגר יהיה ביחד עם ה-`else` או ה-`else if` שבא אחריו. כלומר, הקוד הבא נכון:

```java
if(year % 4 == 0) {
    System.out.println("Summer Olympic games year");
} else if (year % 2 == 0) {
    System.out.println("Winter Olympic games year");
} else {
    System.out.println("No Olympic game this year.");
}
System.out.println("Year: " + year);
```

לעומת זאת, הבא אינו תקין:

```java
if(year % 4 == 0) {
    System.out.println("Summer Olympic games year");
}
else if (year % 2 == 0) {
    System.out.println("Winter Olympic games year");
}
else {
    System.out.println("No Olympic game this year.");
}
System.out.println("Year: " + year);
```

המקרה החריג הזה אינו חשוב מאוד, כלומר, קוד כמו זה שמעל שורה זו אינו נורא. מה שכן, מה שעדיין אסור הוא דבר כמו זה:

```java
if(year % 4 == 0) {
    System.out.println("Summer Olympic games year");
}
else if (year % 2 == 0) {
    System.out.println("Winter Olympic games year");
}
else {
    System.out.println("No Olympic game this year.");
} System.out.println("Year: " + year);
```

שמנו סוגר-סוגר באותה שורה עם פקודה שאינה חלק מרצף של if-else-if - לא בסדר. בנוסף, גם במקרה של if-else-if, הכללים לגבי סוגר-פותח נשמרים. כלומר, הקוד הבא גם אינו נכון:

```java
if(year % 4 == 0)
{
    System.out.println("Summer Olympic games year");
}
else if (year % 2 == 0)
{
    System.out.println("Winter Olympic games year");
}
else
{
    System.out.println("No Olympic game this year.");
}
System.out.println("Year: " + year);
```

## סוגריים מסולסלות ריקות

אם הסוגריים המסולסלות ריקות, לשים את הסוגר-הסוגר בשורה משל עצמו זה תקין, וגם לשים אותו באותו שורה עם הסוגר-הפותח תקין:

```java
public void doNothing() {} // fine
public void doNothing() {
} // also fine
```



# כללים אופציונליים למיטבי לכת

* השתמשו ב-Linter. 
  * השתמשו בו גם כדי להגביל את:
    * האורך המקסימלי של שורה אצלכם
    * האורך המקסימלי של קובץ
    * האורך המקסימלי של פונקציה
    * **[הסיבוכיות הקוגניטיבית](https://en.wikipedia.org/wiki/Cognitive_complexity) של כל פונקציה** - סיבוכיות קוגניטיבית היא דבר שאני מקווה לכתוב עליו פוסט בפני עצמו יום אחד, אבל לבינתיים, הנה מה שאגיד עליה: ראשית, סיבוכיות קוגניטיבית אינה אותו סוג של סיבוכיות שמתעסקים בו במדעי המחשב, זה שעוסק ביעילות זמן וזיכרון: סיבוכיות של מדעי המחשב אינה מעניינת אותנו כמעט אף פעם בעולם של FRC. סיבוכיות קוגניטיבית היא מדד של כמה קונספטים בבת אחת מכילה הפונקציה. באופן כללי, זהו מדד של כמה אפשר לקלוט את הפונקציה בבת אחת באופן קוגניטיבי (ולכן השם). איך מודדים סיבוכיות קוגניטבית? ובכן, לזה אין בהכרח מדד אחד, אבל כן יש משהו בשם **[סיבוכיות ציקלומטית](https://en.wikipedia.org/wiki/Cyclomatic_complexity)** (לא להיבהל מהשם!) שאפשר למדוד, ואפשר להתאים Linter לייצר אזהרות על סיבוכיות ציקלומטית גדולה מדי. סיבוכיות קוגניטיבית גבוהה היא לרוב סימן שגם עברתם על [עקרון האחריות היחידה (SRP - Single Responsibility Principle)](https://en.wikipedia.org/wiki/Single-responsibility_principle), שגם עליו אני מתכוון לכתוב פוסט בעתיד.