document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Universal Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.top-nav .menu');
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    }

    // --- 2. Advanced Exercise Program Logic (tamarin.html) ---
    const programForm = document.getElementById('program-form');
    if (programForm) {
        const selectionContainer = document.getElementById('program-selection-container');
        const displayContainer = document.getElementById('workout-program-display');
        const contentContainer = document.getElementById('workout-program-content');
        const changeBtn = document.getElementById('change-program-btn');
        const prevWeekBtn = document.getElementById('prev-week-btn');
        const nextWeekBtn = document.getElementById('next-week-btn');
        const weekIndicator = document.getElementById('week-indicator');

        const exercisesDB = {
            chest: { name: "صدر", icon: "fa-solid fa-chess-board" }, back: { name: "ظهر", icon: "fa-solid fa-person-walking" }, legs: { name: "أرجل", icon: "fa-solid fa-person-running" }, shoulders: { name: "أكتاف", icon: "fa-solid fa-hand-rock" }, biceps: { name: "بايسبس", icon: "fa-solid fa-hand-fist" }, triceps: { name: "ترايسبس", icon: "fa-solid fa-hand-point-down" }, abs: { name: "بطن", icon: "fa-solid fa-fire" }, cardio: { name: "كارديو", icon: "fa-solid fa-person-biking" }
        };

        const allExercises = [
            { muscle: 'chest', name: 'بنش برس بالبار (مستوي)', level: ['beginner', 'intermediate'], rest: '60-90s', videoUrl: 'https://www.youtube.com/watch?v=rT7DgLdSAng' },
            { muscle: 'chest', name: 'بنش برس بالدمبل (عالي)', level: ['beginner', 'intermediate'], rest: '60s', videoUrl: 'https://www.youtube.com/watch?v=8iPEnn-ltC8' },
            { muscle: 'chest', name: 'تفتيح بالكابل', level: ['intermediate'], rest: '45-60s', videoUrl: 'https://www.youtube.com/watch?v=c_Zg9dKFNr4' },
            { muscle: 'chest', name: 'غاطس (Dips)', level: ['intermediate'], rest: '60s', videoUrl: 'https://www.youtube.com/watch?v=2z8JmcrW-As' },
            { muscle: 'back', name: 'سحب أمامي واسع', level: ['beginner', 'intermediate'], rest: '60s', videoUrl: 'https://www.youtube.com/watch?v=lueEJGjTuPQ' },
            { muscle: 'back', name: 'تجديف بالبار', level: ['intermediate'], rest: '60-90s', videoUrl: 'https://www.youtube.com/watch?v=vT2GjY_Umpw' },
            { muscle: 'back', name: 'عقلة (Pull-ups)', level: ['intermediate'], rest: '90s', videoUrl: 'https://www.youtube.com/watch?v=eGo4IYlbE5g' },
            { muscle: 'back', name: 'منشار بالدمبل', level: ['beginner', 'intermediate'], rest: '60s', videoUrl: 'https://www.youtube.com/watch?v=pYcpY20QaE8' },
            { muscle: 'legs', name: 'سكوات خلفي بالبار', level: ['beginner', 'intermediate'], rest: '90-120s', videoUrl: 'https://www.youtube.com/watch?v=bEv6CCg2BC8' },
            { muscle: 'legs', name: 'دفع بالأرجل', level: ['beginner', 'intermediate'], rest: '60-90s', videoUrl: 'https://www.youtube.com/watch?v=IZ_9sC6l2bQ' },
            { muscle: 'legs', name: 'اندفاع (Lunges)', level: ['beginner', 'intermediate'], rest: '60s', videoUrl: 'https://www.youtube.com/watch?v=QOVaHwm-Q6U' },
            { muscle: 'legs', name: 'مرجحة رجل خلفي', level: ['beginner', 'intermediate'], rest: '60s', videoUrl: 'https://www.youtube.com/watch?v=1Tq3QdYUuHs' },
            { muscle: 'shoulders', name: 'دفع كتف عسكري', level: ['intermediate'], rest: '60-90s', videoUrl: 'https://www.youtube.com/watch?v=2yjwXTZQDDI' },
            { muscle: 'shoulders', name: 'رفرفة جانبي', level: ['beginner', 'intermediate'], rest: '45-60s', videoUrl: 'https://www.youtube.com/watch?v=3VcKaXpzqRo' },
            { muscle: 'shoulders', name: 'Face Pulls', level: ['intermediate'], rest: '45-60s', videoUrl: 'https://www.youtube.com/watch?v=eIq5CB9wyo4' },
            { muscle: 'biceps', name: 'تبادل بالدمبل', level: ['beginner', 'intermediate'], rest: '60s', videoUrl: 'https://www.youtube.com/watch?v=sAq_ocpRh_I' },
            { muscle: 'biceps', name: 'همر كيرل', level: ['beginner', 'intermediate'], rest: '60s', videoUrl: 'https://www.youtube.com/watch?v=zC3nLlEvin4' },
            { muscle: 'triceps', name: 'ترايسبس بوش داون', level: ['beginner', 'intermediate'], rest: '60s', videoUrl: 'https://www.youtube.com/watch?v=2-LAMcpzODU' },
            { muscle: 'triceps', name: 'Skull Crushers', level: ['intermediate'], rest: '60-90s', videoUrl: 'https://www.youtube.com/watch?v=d_KZxkY_0cM' },
            { muscle: 'abs', name: 'بلانك', level: ['beginner', 'intermediate'], sets: '4x60s', rest: '45s', videoUrl: 'https://www.youtube.com/watch?v=ASdvN_XEl_c' },
            { muscle: 'abs', name: 'رفع الأرجل', level: ['beginner', 'intermediate'], sets: '4x15', rest: '45s', videoUrl: 'https://www.youtube.com/watch?v=l4kQd9eWJmk' },
            { muscle: 'cardio', name: 'جري متوسط الشدة', level: ['beginner', 'intermediate'], sets: '30 min', rest: 'N/A', videoUrl: 'https://www.youtube.com/watch?v=8L-fDP21I5E' },
            { muscle: 'cardio', name: 'نط الحبل', level: ['beginner', 'intermediate'], sets: '15 min', rest: 'Intervals', videoUrl: 'https://www.youtube.com/watch?v=u3pgRk_HJp4' }
        ];

        function generateExerciseProgram(duration, level, goal) {
            let program = [];
            for (let week = 1; week <= duration; week++) {
                const phase = Math.floor((week - 1) / 4);
                const getExercises = (muscle, count) => {
                    const filtered = allExercises.filter(ex => ex.muscle === muscle && ex.level.includes(level));
                    const start = (phase * count) % filtered.length;
                    let result = [];
                    for(let i=0; i<count; i++) result.push(filtered[(start + i) % filtered.length]);
                    return result;
                };
                const currentSets = (phase === 0) ? '3x12' : '4x10';
                let pushDay = { dayName: 'يوم الدفع (Push)', exercises: [...getExercises('chest', 3), ...getExercises('shoulders', 2), ...getExercises('triceps', 1)] };
                let pullDay = { dayName: 'يوم السحب (Pull)', exercises: [...getExercises('back', 4), ...getExercises('biceps', 2)] };
                let legsDay = { dayName: 'يوم الأرجل', exercises: [...getExercises('legs', 4), ...getExercises('abs', 2)] };
                [pushDay, pullDay, legsDay].forEach(day => day.exercises.forEach(e => { if(!e.sets) e.sets = currentSets; }));
                if (goal === 'loss') {
                    pushDay.exercises.push(getExercises('cardio', 1)[0]);
                    legsDay.exercises.push(getExercises('cardio', 1)[0]);
                }
                program.push([pushDay, pullDay, legsDay]);
            }
            return program;
        }
        
        function displayWeek(program, weekIndex) {
            const weekData = program[weekIndex];
            contentContainer.innerHTML = '';
            weekData.forEach(day => {
                const dayTitle = document.createElement('h2');
                dayTitle.className = 'day-title';
                dayTitle.innerHTML = `<i class="fa-solid fa-calendar-day"></i> ${day.dayName}`;
                contentContainer.appendChild(dayTitle);
                day.exercises.forEach(exercise => {
                     const card = createExerciseCard(exercise);
                     contentContainer.appendChild(card);
                });
            });
            weekIndicator.textContent = `الأسبوع ${weekIndex + 1} من ${program.length}`;
            prevWeekBtn.disabled = weekIndex === 0;
            nextWeekBtn.disabled = weekIndex === program.length - 1;
        }

        function createExerciseCard(exercise) {
            const card = document.createElement('div');
            card.className = 'exercise-card';
            const muscleInfo = exercisesDB[exercise.muscle];
            const videoButton = `<a href="${exercise.videoUrl}" target="_blank" class="video-link"><i class="fa-brands fa-youtube"></i> شاهد</a>`;
            card.innerHTML = `<div class="card-content-wrapper"><div class="exercise-header"><i class="fa-solid ${muscleInfo.icon}"></i><h3>${exercise.name}</h3></div><div class="exercise-details"><p><strong><i class="fa-solid fa-dumbbell"></i> المجموعات:</strong> ${exercise.sets}</p><p><strong><i class="fa-solid fa-clock"></i> الراحة:</strong> ${exercise.rest}</p></div></div><div class="card-action-wrapper">${videoButton}</div>`;
            return card;
        }

        function renderProgramPage() {
            let programData = JSON.parse(localStorage.getItem('userExerciseProgram'));
            if (programData) {
                selectionContainer.style.display = 'none';
                displayContainer.style.display = 'block';
                displayWeek(programData.program, programData.currentWeek);
            } else {
                selectionContainer.style.display = 'block';
                displayContainer.style.display = 'none';
            }
        }

        programForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const goal = document.getElementById('goal').value;
            const level = document.getElementById('level').value;
            const duration = parseInt(document.getElementById('duration').value);
            const program = generateExerciseProgram(duration, level, goal);
            localStorage.setItem('userExerciseProgram', JSON.stringify({ program, currentWeek: 0 }));
            renderProgramPage();
        });

        changeBtn.addEventListener('click', () => { localStorage.removeItem('userExerciseProgram'); renderProgramPage(); });
        prevWeekBtn.addEventListener('click', () => {
            let data = JSON.parse(localStorage.getItem('userExerciseProgram'));
            if (data.currentWeek > 0) { data.currentWeek--; localStorage.setItem('userExerciseProgram', JSON.stringify(data)); renderProgramPage(); }
        });
        nextWeekBtn.addEventListener('click', () => {
            let data = JSON.parse(localStorage.getItem('userExerciseProgram'));
            if (data.currentWeek < data.program.length - 1) { data.currentWeek++; localStorage.setItem('userExerciseProgram', JSON.stringify(data)); renderProgramPage(); }
        });
        
        renderProgramPage();
    }
    
  // --- 3. Advanced Weekly Diet Page Logic (wegabat.html) ---
    const dietForm = document.getElementById('diet-form');
    if (dietForm) {
        // --- Databases ---
        const foodItems = {
            chicken_breast: { name: 'صدر دجاج مشوي', calories: 165, servingSize: '100g', type: 'protein', tags: ['balanced', 'high_protein', 'low_carb'] },
            tuna_can: { name: 'علبة تونة (ماء)', calories: 130, servingSize: 'علبة', type: 'protein', tags: ['balanced', 'high_protein', 'low_carb'] },
            eggs: { name: 'بيض مسلوق', calories: 155, servingSize: 'بيضتان', type: 'protein', tags: ['balanced', 'high_protein', 'vegetarian'] },
            oats: { name: 'شوفان', calories: 150, servingSize: 'نصف كوب', type: 'carbs', tags: ['balanced', 'high_protein', 'vegetarian'] },
            sweet_potato: { name: 'بطاطا حلوة', calories: 180, servingSize: 'حبة', type: 'carbs', tags: ['balanced', 'high_protein', 'vegetarian'] },
            avocado: { name: 'أفوكادو', calories: 240, servingSize: 'نصف حبة', type: 'fats', tags: ['balanced', 'high_protein', 'low_carb', 'vegetarian'] },
            mixed_salad: { name: 'سلطة خضراء', calories: 50, servingSize: 'طبق', type: 'veg', tags: ['balanced', 'high_protein', 'low_carb', 'vegetarian'] },
            apple: { name: 'تفاحة', calories: 95, servingSize: 'حبة', type: 'fruit', tags: ['balanced', 'high_protein', 'vegetarian'] }
        };
        const dietSystems = {
            balanced: { name: 'متوازن', icon: 'fa-scale-balanced', description: 'تقسيم متوازن للمغذيات.', rules: { allowedTags: ['balanced'] } },
            high_protein: { name: 'عالي البروتين', icon: 'fa-drumstick-bite', description: 'تركيز على البروتين.', rules: { allowedTags: ['high_protein'] } },
            low_carb: { name: 'قليل الكارب', icon: 'fa-bread-slice', description: 'تقليل الكربوهيدرات.', rules: { allowedTags: ['low_carb'] } },
            vegetarian: { name: 'نباتي', icon: 'fa-leaf', description: 'يعتمد على مصادر نباتية.', rules: { allowedTags: ['vegetarian'] } }
        };
        const mealTemplates = {
            breakfast: { composition: ['protein', 'carbs'], name: 'الفطور', icon: 'fa-egg' },
            lunch: { composition: ['protein', 'carbs', 'veg'], name: 'الغداء', icon: 'fa-drumstick-bite' },
            dinner: { composition: ['protein', 'fats', 'veg'], name: 'العشاء', icon: 'fa-leaf' },
        };
        
        // --- Page Elements ---
        const dietSelectionContainer = document.getElementById('diet-selection-container');
        const dietPlanDisplay = document.getElementById('diet-plan-display');
        const changeDietBtn = document.getElementById('change-diet-btn');
        const weeklyDietContainer = document.getElementById('weekly-diet-container');
        const planTitle = document.getElementById('plan-title');
        const dietSystemSelection = document.getElementById('diet-system-selection');

        // --- Functions ---
        function populateDietSystems() {
            dietSystemSelection.innerHTML = '';
            for (const key in dietSystems) {
                const system = dietSystems[key];
                const label = document.createElement('label');
                label.innerHTML = `<input type="radio" name="dietSystem" value="${key}" ${key === 'balanced' ? 'checked' : ''}><div class="diet-card"><i class="fa-solid ${system.icon}"></i><h4>${system.name}</h4><p>${system.description}</p></div>`;
                dietSystemSelection.appendChild(label);
            }
        }

        function createSingleDayMealPlan(systemKey) {
            const system = dietSystems[systemKey];
            const plan = {};
            const getFood = (type) => {
                const allowedFoods = Object.values(foodItems).filter(food => food.type === type && food.tags.some(tag => system.rules.allowedTags.includes(tag)));
                return allowedFoods.length > 0 ? allowedFoods[Math.floor(Math.random() * allowedFoods.length)] : null;
            };
            for (const mealKey in mealTemplates) {
                const template = mealTemplates[mealKey];
                plan[mealKey] = [];
                template.composition.forEach(foodType => {
                    const food = getFood(foodType);
                    if (food) plan[mealKey].push(food);
                });
            }
            return plan;
        }
        
        function generateWeeklyDietProgram(systemKey) {
            const weeklyProgram = [];
            for (let i = 0; i < 7; i++) {
                weeklyProgram.push(createSingleDayMealPlan(systemKey));
            }
            return weeklyProgram;
        }

        function displayWeeklyDiet(weeklyProgram, targetCalories) {
            weeklyDietContainer.innerHTML = '';
            let averageCalories = 0;
            const dayNames = ["اليوم الأول", "اليوم الثاني", "اليوم الثالث", "اليوم الرابع", "اليوم الخامس", "اليوم السادس", "اليوم السابع"];

            weeklyProgram.forEach((dailyPlan, index) => {
                let dailyTotalCalories = 0;
                const button = document.createElement('button');
                button.className = 'accordion';
                button.textContent = dayNames[index];
                
                const panel = document.createElement('div');
                panel.className = 'panel';

                // Create a .cards container inside the panel
                const mealCardsContainer = document.createElement('div');
                mealCardsContainer.className = 'cards';

                for(const mealKey in dailyPlan) {
                    const meal = dailyPlan[mealKey];
                    if(meal.length === 0) continue;
                    
                    // Create a separate card for EACH meal
                    const mealCard = document.createElement('div');
                    mealCard.className = 'card';
                    const template = mealTemplates[mealKey];
                    let mealHTML = `<h3><i class="fa-solid ${template.icon}"></i> ${template.name}</h3><ul>`;
                    
                    meal.forEach(food => {
                        mealHTML += `<li>${food.name} (${food.servingSize})</li>`;
                        dailyTotalCalories += food.calories;
                    });

                    mealHTML += `</ul>`;
                    mealCard.innerHTML = mealHTML;
                    mealCardsContainer.appendChild(mealCard);
                }
                
                panel.appendChild(mealCardsContainer);
                weeklyDietContainer.appendChild(button);
                weeklyDietContainer.appendChild(panel);
                averageCalories += dailyTotalCalories;
            });

            averageCalories = Math.round(averageCalories / 7);
            planTitle.innerHTML = `<i class="fa-solid fa-bullseye"></i> متوسط السعرات اليومي: <strong>${averageCalories}</strong> (المستهدف: ~${targetCalories})`;
            
            document.querySelectorAll('.accordion').forEach(acc => {
                acc.addEventListener('click', function() {
                    this.classList.toggle('active');
                    const panel = this.nextElementSibling;
                    if (panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                    } else {
                        panel.style.maxHeight = panel.scrollHeight + "px";
                    }
                });
            });
        }

        function renderDietPage() {
            const userDiet = JSON.parse(localStorage.getItem('userAdvancedDiet'));
            if (userDiet) {
                dietSelectionContainer.style.display = 'none';
                dietPlanDisplay.style.display = 'block';
                const weeklyProgram = generateWeeklyDietProgram(userDiet.system);
                displayWeeklyDiet(weeklyProgram, userDiet.targetCalories);
            } else {
                dietSelectionContainer.style.display = 'block';
                dietPlanDisplay.style.display = 'none';
                populateDietSystems();
            }
        }

        dietForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let bmr = (10 * parseFloat(document.getElementById('weight').value)) + (6.25 * parseFloat(document.getElementById('height').value)) - (5 * parseInt(document.getElementById('age').value)) + (document.getElementById('gender').value === 'male' ? 5 : -161);
            let tdee = bmr * parseFloat(document.getElementById('activity').value);
            let targetCalories = tdee + (document.getElementById('diet-goal').value === 'gain' ? 300 : -400);
            localStorage.setItem('userAdvancedDiet', JSON.stringify({ targetCalories: Math.round(targetCalories), system: document.querySelector('input[name="dietSystem"]:checked').value }));
            renderDietPage();
        });

        changeDietBtn.addEventListener('click', () => {
            localStorage.removeItem('userAdvancedDiet');
            renderDietPage();
        });
        
        renderDietPage();
    }
    
    // --- 4. Smart Tips Page Logic (nasa2e7.html) ---
    const tipsContainer = document.getElementById('tips-container');
    if (tipsContainer) {
        const tipsDB = {
            general: [ { icon: "fa-droplet", text: "اشرب 3 لتر ماء يوميًا." }, { icon: "fa-moon", text: "احصل على 7-8 ساعات نوم." }, { icon: "fa-weight-scale", text: "لا تعتمد على الميزان فقط، الصور والقياسات أهم." }, { icon: "fa-person-walking", text: "الاستمرارية أهم من الشدة." } ],
            chest: [{ icon: "fa-chess-board", text: "في تمارين الصدر، ركز على 'عصر' العضلة في قمة الحركة." }],
            back: [{ icon: "fa-person-walking", text: "عند تمارين السحب للظهر، اسحب بالكوع وليس بالذراع." }],
            legs: [{ icon: "fa-person-running", text: "لا تهمل الإحماء جيدًا قبل يوم الأرجل." }],
            shoulders: [{ icon: "fa-hand-rock", text: "في الرفرفة الجانبية، استخدم وزنًا يمكنك التحكم به." }],
            cardio: [{ icon: "fa-person-biking", text: "لخسارة الدهون، يفضل أداء الكارديو بعد تمرين القوة." }]
        };
        function displaySmartTips() {
            const userPlan = JSON.parse(localStorage.getItem('userExerciseProgram'));
            let tipsToShow = [...tipsDB.general].sort(() => 0.5 - Math.random()).slice(0, 2);
            if (userPlan) {
                const programText = JSON.stringify(userPlan.program);
                for (const muscle in tipsDB) { if (muscle !== 'general' && programText.includes(muscle)) { tipsToShow.push(...tipsDB[muscle]); } }
            } else { tipsToShow.push(...[...tipsDB.general].sort(() => 0.5 - Math.random()).slice(2, 4)); }
            tipsContainer.innerHTML = ''; // Clear previous tips
            tipsToShow.forEach(tip => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `<i class="fa-solid ${tip.icon} card-icon"></i><p>${tip.text}</p>`;
                tipsContainer.appendChild(card);
            });
        }
        displaySmartTips();
    }
});