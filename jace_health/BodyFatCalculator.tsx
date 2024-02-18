import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet } from 'react-native';

export default function BodyFatCalculator({ navigation }) {
    
    const [weight, setWeight] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [bodyFat, setBodyFat] = useState<number>(0);
    const [neckCircumference, setNeckCircumference] = useState<number>(0);
    const [waistCircumference, setWaistCircumference] = useState<number>(0);
    const [hipCircumference, setHipCircumference] = useState<number>(0);
    const [gender, setGender] = useState<String>('');

    const calculateBodyFat = () => {
        let calculatedBodyFat = 0;
        if (gender === "male") {
            calculatedBodyFat = 86.010 * Math.log10(waistCircumference - neckCircumference) - 70.041 * Math.log10(height) + 36.76;
        } else {
            calculatedBodyFat = 163.205 * Math.log10(waistCircumference + hipCircumference - neckCircumference) - 97.684 * Math.log10(height) - 78.387;
        }8
        setBodyFat(calculatedBodyFat);
    };

    return (
 
        <ScrollView style={styles.container}>
        {/* Your input fields and results here... */}
        <Button
          title="Go back"
          onPress={() => navigation.goBack()}
        />
               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div>
                <h2>Body Fat Calculator</h2>
                <h3>US. Navy Method</h3>
                <div>
                    <label>Gender</label>
                    <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div>
                    <label>Weight (kg):</label>
                    <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} />
                </div>
                <div>
                    <label>Height (m):</label>
                    <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} />
                </div>
                <div>
                    <label>Neck Circumference (cm):</label>
                    <input type="number" value={neckCircumference} onChange={(e) => setNeckCircumference(Number(e.target.value))} />
                </div>
                <div>
                    <label>Waist Circumference (cm):</label>
                    <input type="number" value={waistCircumference} onChange={(e) => setWaistCircumference(Number(e.target.value))} />
                </div>
                <div>
                    <label>(only needed for females) Hip Circumference (cm):</label>
                    <input type="number" value={hipCircumference} onChange={(e) => setHipCircumference(Number(e.target.value))} />
                </div>
                <button onClick={() => calculateBodyFat()}>Calculate</button>
                <div>
                    <label>Body Fat:</label>
                    <span>{bodyFat} %</span>
                </div>
            </div>
        </div>
      </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
  });

