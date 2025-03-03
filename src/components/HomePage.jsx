import React from 'react';
import Card from './Card';
import Heading from './Heading';

 import tableCost from './../assets/cost-table.png'
 import lowCost from './../assets/low-cost.png'

function HomePage() {

 
  return (
    <>
      <div className="container">
        <Card>
          <Heading title={'💪 Best Gym Plan for Skinny Guys (Muscle Gain) '} />
          <ul>
            <li className=" px-5 list-unstyled ">
              {' '}
              🔹 Workout Duration: 60–90 minutes per session{' '}
            </li>
            <li>🔹 Frequency: 4–6 days per week</li>
            <li>🔹 Focus: Heavy lifting + Progressive overload</li>
            <li>🔹 Diet: High-calorie, high-protein meals</li>
          </ul>
        </Card>

        <Card>
          <Heading title={'🔥 Best Gym Routine for Skinny Guys '} />

          {/* Day-1 */}
          <h3>🗓️ Day 1 – Chest & Triceps </h3>
          <ul>
            <li>✅ Bench Press – 4 sets x 6-10 reps</li>
            <li>✅ Incline Dumbbell Press – 3 sets x 8-12 reps</li>
            <li>✅ Incline Dumbbell Press – 3 sets x 8-12 reps</li>
            <li>✅ Triceps Pushdowns – 3 sets x 10-12 reps</li>
          </ul>

          {/* Day-2 */}

          <h3>🗓️ Day 2 – Back & Biceps</h3>

          <ul>
            <li>✅ Pull-ups – 4 sets x 6-10 reps</li>
            <li> ✅ Barbell Row – 3 sets x 8-12 reps</li>
            <li>✅ Lat Pulldown – 3 sets x 10-12 reps </li>
            <li>✅ Bicep Curls – 3 sets x 10-12 reps </li>
          </ul>

          {/* Day-3 */}

          <h3> 🗓️ Day 3 – Legs & Abs</h3>
          <ul>
            <li> ✅ Squats – 4 sets x 8-12 reps</li>
            <li>✅ Leg Press – 3 sets x 10-12 reps</li>
            <li>✅ Romanian Deadlifts – 3 sets x 10 reps</li>
            <li>✅ Hanging Leg Raises – 3 sets x 12-15 reps</li>
          </ul>

          {/* Day-4 */}

          <h3> 🗓️ Day 4 – Shoulders & Arms</h3>

          <ul>
            <li>✅ Overhead Press – 4 sets x 6-10 reps</li>
            <li> ✅ Lateral Raises – 3 sets x 12 reps</li>
            <li>✅ Dumbbell Shrugs – 3 sets x 12 reps</li>
            <li>✅ Triceps Dips – 3 sets x 10 reps</li>
          </ul>

          <h3> 🗓️ Day 5 – Rest or Light Cardio</h3>

          {/* Day-6 */}

          <h3> 🗓️ Day 6 – Full Body Workout (Optional)</h3>
          <ul>
            <li>✅ Deadlifts – 4 sets x 6 reps</li>
            <li>✅ Pull-ups – 3 sets x 8 reps</li>
            <li>✅ Squats – 3 sets x 8 reps</li>
            <li>✅ Bench Press – 3 sets x 8 reps</li>
          </ul>

          {/* Day-7 */}

          <h3>🗓️ Day 7 – Rest & Recovery</h3>
        </Card>

        <Card>
          <Heading title={' 🍽️ Diet Plan for Muscle Gain (Bulking)'} />

          <ul>
            <li>
              ✔ Eat High-Protein Foods: Chicken, eggs, fish, paneer, tofu,
              lentils
            </li>
            <li> ✔ Increase Carbs: Rice, potatoes, oats, bananas</li>
            <li>✔ Healthy Fats: Nuts, peanut butter, olive oil</li>
            <li>✔ Eat Every 2-3 Hours</li>
            <li>✔ Drink 3-4L of Water Daily</li>
            <li>✔ Take Whey Protein (Optional)</li>
          </ul>
        </Card>

        {/* Card**************** */}

        <Card>
          <Heading title={'⏳ How Long to See Results? '} />

          <ul>
            <li>🔹 2–3 months: Noticeable strength & size increase</li>
            <li>🔹 6 months: Visible muscle growth</li>
            <li>🔹 1 year+: Significant body transformation</li>
          </ul>
        </Card>

        <h1 className=" text-center text-success ">Diet Plan</h1>

        {/* Card**************** */}

        <Card>
          <Heading
            title={'🔥 High-Calorie Diet Plan for Skinny Guys (Muscle Gain) '}
          />

          <ul>
            <li>📌 Goal: Gain lean muscle mass</li>
            <li>📌 Calories: 2,500–3,000 kcal/day</li>
            <li>
              📌 Protein Target: 1.5–2g per kg of body weight (80–100g
              protein/day)
            </li>
          </ul>
        </Card>

        {/* Card**************** */}

        <Card>
          <Heading title={'🥗 Sample Meal Plan (3000 kcal, High Protein) '} />

          <h3>🥣 Breakfast (8:00 AM)</h3>
          <ul>
            <li> ✅ 4 Whole Eggs (boiled/scrambled) – 24g protein</li>
            <li>✅ 2 Whole Wheat Bread Slices – 8g protein</li>
            <li>✅ 1 Banana + 1 tbsp Peanut Butter – 5g protein</li>
            <li>✅ 1 Glass Full Cream Milk – 8g protein</li>
            <li>📌 Total: 600 kcal, 45g protein</li>
          </ul>

          <h3>🍛 Mid-Morning Snack (11:00 AM)</h3>

          <ul>
            <li>✅ Handful of Almonds & Walnuts – 200 kcal</li>
            <li>✅ 1 Cup Greek Yogurt / Curd – 8g protein</li>
            <li>📌 Total: 300 kcal, 10g protein</li>
          </ul>

          <h3>🍗 Lunch (2:00 PM)</h3>
          <ul>
            <li> ✅ 1.5 Cup Cooked Rice / 2 Roti – 300 kcal</li>
            <li>✅ 150g Chicken / Fish / Paneer – 35g protein</li>
            <li>✅ 1 Bowl Vegetables + Salad – 5g protein</li>
            <li>✅ 1 tbsp Ghee or Butter – 100 kcal</li>
            <li>📌 Total: 700 kcal, 40g protein</li>
          </ul>

          <h3>🏋️ Pre-Workout Meal (5:00 PM)</h3>
          <ul>
            <li>✅ 1 Banana + 10 Almonds – 150 kcal</li>
            <li>✅ 1 Scoop Whey Protein (Optional) – 25g protein</li>
            <li>📌 Total: 250 kcal, 30g protein</li>
          </ul>
          <h3>💪 Post-Workout Meal (7:30 PM)</h3>
          <ul>
            <li>✅ 1 Scoop Whey Protein with Water – 25g protein</li>
            <li>✅ Handful of Dates / Honey for Carbs – 200 kcal</li>
            <li>📌 Total: 300 kcal, 30g protein</li>
          </ul>
          <h3>🥘 Dinner (9:00 PM)</h3>
          <ul>
            <li>✅ 2 Roti / 1 Cup Brown Rice – 250 kcal</li>
            <li>✅ 150g Paneer / Tofu / Chicken / Fish – 35g protein</li>
            <li>✅ 1 Bowl Green Veggies + Salad – 5g protein</li>
            <li>📌 Total: 600 kcal, 40g protein</li>
          </ul>
          <h3>🥛 Before Bed (11:00 PM)</h3>
          <ul>
            <li>✅ 1 Glass Full-Fat Milk + 10 Almonds – 10g protein</li>
            <li>📌 Total: 250 kcal, 10g protein</li>
          </ul>

          <h3>🔥 Total Daily Intake:</h3>

          <ul>
            <li>✅ Calories: 2,800–3,000 kcal</li>
            <li>✅ Protein: 120–150g</li>
            <li>✅ Carbs: 300–350g</li>
            <li>✅ Fats: 80–100g</li>
          </ul>
        </Card>

        {/* Card**************** */}

        <Card>
          <Heading title={'        🔥 Key Tips to Gain Muscle Fast '} />

          <ul>
            <li>✔ Eat every 2-3 hours (even if not hungry)</li>
            <li>✔ Lift heavy & progressive</li>
            <li>overload (increase weights weekly)</li>
            <li>✔ Avoid junk food, focus on whole foods </li>
            <li>
              ✔ Sleep 7–9 hours for recovery 
            </li>

            <li>🚀 Follow this plan for 3–6 months
            and see noticeable muscle growth! 💪🔥</li>
          </ul>
        </Card>




<h1 className='text-center text-success'>Costing</h1>
<p className='text-light text-center'>The daily food cost for the muscle gain diet in India depends on where you buy groceries and your location. Below is an estimated breakdown of the cost per day based on common prices in India.</p>


        {/* Card**************** */}

        <Card>
          <Heading title={' 💰 Estimated Daily Food Cost in India (Muscle Gain Diet)'} />

         <div className='text-center'>
         <img src={tableCost} alt="cost-table"  
          className='img-fluid'
          />
         </div>

         

        </Card>

        {/* Card**************** */}

        <Card>
          <Heading title={' 🔥 Total Cost per Day '} />
          <ul>
            <li>✔ With Chicken & Whey Protein: ₹450–500/day
            </li>
            <li>✔ With Paneer (No Whey Protein): ₹350–400/day
            </li>
            <li>✔ Vegetarian (No Meat, No Whey): ₹300–350/day
            </li>
           </ul>
        </Card>
        {/* Card**************** */}

        <Card>
          <Heading title={'📌 Monthly Cost Estimate '} />

          <ul>
            <li>💰 With Chicken & Whey Protein: ₹13,500–15,000/month
            </li>
            <li>💰 Vegetarian (No Whey, Paneer/Tofu): ₹9,000–12,000/month

</li>
          
          </ul>
        </Card>
        {/* Card**************** */}

        <Card>
          <Heading title={' 💡 Ways to Reduce Cost:'} />

          <ul>
            <li>✅ Buy eggs, rice, paneer, and milk in bulk
            </li>
            <li>✅ Replace whey with homemade protein shakes (milk, banana, peanut butter, oats)
            </li>
            <li>✅ Use lentils (dal), soya chunks, and sprouts for protein
            </li>
            <li>✅ Buy seasonal fruits & vegetables for lower cost

</li>
          </ul>
        </Card>




        <Card>
          <Heading title={'💰 Budget-Friendly Muscle Gain Diet Plan (₹200–250/day)  '} />

          <p> If you want to gain muscle on a budget, you can replace expensive items like chicken, paneer, and whey protein with affordable high-protein alternatives like eggs, dal, soya chunks, and homemade protein shakes.

</p>



<div className='text-center'>
         <img src={lowCost} alt="low-cost-table"  
          className='img-fluid'
          />
         </div>

         
        </Card>


      
        {/* Card**************** */}

        <Card>
          <Heading title={'💡 Budget Muscle Gain Tips:'} />

          <ul>
            <li>✅ Replace whey protein with homemade shakes (milk, banana, oats, peanut butter)

            </li>
            <li>✅ Buy in bulk – Rice, dal, soya chunks, eggs are cheaper in large quantities

            </li>
            <li> ✅ Eat local & seasonal foods – Cheaper and nutritious

            </li>
            <li>✅ Use Soya Chunks, Dal, and Sprouts – Cheap & high-protein
           </li>

           <li>🚀 Follow this diet + workout for 3–6 months to see solid muscle gain without spending too much! Would you like a homemade mass gainer shake recipe? 🏋️🔥</li>
          </ul>
        </Card>


      </div>
    </>
  );
}

export default HomePage;
