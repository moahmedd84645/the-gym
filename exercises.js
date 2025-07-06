const exercises = {
    chest: [
        { name: "بنش برس بالبار", englishName: "Barbell Bench Press", description: "التمرين الأساسي لبناء القوة والحجم في عضلة الصدر.", rest: "60-90 ثانية", sets: "4x10", videoUrl: "https://www.youtube.com/watch?v=rT7DgCr-3pg", iconFilename: "chest.png", level: ["beginner", "intermediate"] },
        { name: "بنش برس عالي بالدمبل", englishName: "Incline Dumbbell Press", description: "يستهدف الجزء العلوي من الصدر بشكل أساسي.", rest: "60 ثانية", sets: "3x12", videoUrl: "https://www.youtube.com/watch?v=8iPEnn-ltC8", iconFilename: "chest.png", level: ["beginner", "intermediate"] }
    ],
    back: [
        { name: "سحب أمامي واسع", englishName: "Wide Grip Lat Pulldown", description: "ممتاز لبناء عرض الظهر (المجانص).", rest: "60 ثانية", sets: "4x12", videoUrl: "https://www.youtube.com/watch?v=lueEJGjTuPQ", iconFilename: "back.png", level: ["beginner", "intermediate"] },
        { name: "تجديف بالبار", englishName: "Bent Over Barbell Row", description: "لبناء سماكة وقوة عضلات منتصف الظهر.", rest: "60-90 ثانية", sets: "4x10", videoUrl: "https://www.youtube.com/watch?v=vT2GjY_Umpw", iconFilename: "back.png", level: ["intermediate"] }
    ],
    legs: [
        { name: "سكوات خلفي بالبار", englishName: "Barbell Back Squat", description: "ملك تمارين الأرجل، يقوي كل الجزء السفلي من الجسم.", rest: "90-120 ثانية", sets: "4x10", videoUrl: "https://www.youtube.com/watch?v=bEv6CCg2BC8", iconFilename: "legs.png", level: ["beginner", "intermediate"] },
        { name: "دفع بالأرجل", englishName: "Leg Press", description: "بديل آمن للسكوات ويركز على عضلات الفخذ الأمامية.", rest: "60-90 ثانية", sets: "4x12", videoUrl: "https://www.youtube.com/watch?v=IZxyjW7MPJQ", iconFilename: "legs.png", level: ["beginner", "intermediate"] }
    ],
    shoulders: [
        { name: "دفع كتف بالبار", englishName: "Overhead Barbell Press", description: "لبناء القوة والحجم في عضلات الكتف الأمامية والجانبية.", rest: "60-90 ثانية", sets: "4x10", videoUrl: "https://www.youtube.com/watch?v=2yjwXTZQDDI", iconFilename: "shoulders.png", level: ["intermediate"] },
        { name: "رفرفة جانبي بالدمبل", englishName: "Dumbbell Lateral Raise", description: "لعزل وبناء الكتف الجانبي وإعطاء الجسم شكل V.", rest: "45-60 ثانية", sets: "4x15", videoUrl: "https://www.youtube.com/watch?v=3VcKaXpzqRo", iconFilename: "shoulders.png", level: ["beginner", "intermediate"] }
    ],
    biceps: [
        { name: "تبادل بالدمبل", englishName: "Dumbbell Bicep Curl", description: "تمرين أساسي لعضلة البايسبس.", rest: "60 ثانية", sets: "3x12", videoUrl: "https://www.youtube.com/watch?v=sBviR_2M_lA", iconFilename: "biceps.png", level: ["beginner", "intermediate"] }
    ],
    triceps: [
        { name: "ترايسبس بوش داون", englishName: "Triceps Pushdown", description: "لعزل عضلة الترايسبس بشكل فعال.", rest: "60 ثانية", sets: "3x12", videoUrl: "https://www.youtube.com/watch?v=2-LAMcpzODU", iconFilename: "triceps.png", level: ["beginner", "intermediate"] }
    ],
    abs: [
        { name: "بلانك", englishName: "Plank", description: "لتقوية عضلات الجذع بالكامل.", rest: "45 ثانية", sets: "4x60 ثانية", videoUrl: "https://www.youtube.com/watch?v=ASdvN_XEl_c", iconFilename: "abs.png", level: ["beginner", "intermediate"] },
        { name: "كرنشز", englishName: "Crunches", description: "لتركيز على عضلات البطن العلوية.", rest: "45 ثانية", sets: "4x20", videoUrl: "https://www.youtube.com/watch?v=Xyd_fa5zoEU", iconFilename: "abs.png", level: ["beginner", "intermediate"] }
    ]
};