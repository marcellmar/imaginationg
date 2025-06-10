'use client';

import React, { useState, useEffect } from 'react';
import { useBusiness } from '../../../context/BusinessWorkContext';

// Manually imported exercises
const exercisePatterns = {
  HOME: {
    SQUAT: ['JUMP SQUAT', 'PISTOL SQUAT', 'BULGARIAN SPLIT SQUAT', 'BODYWEIGHT SQUAT', 'SUMO SQUAT', 'WALL SIT', 'SPLIT SQUAT', 'LATERAL SQUAT', 'PRISONER SQUAT', 'PULSE SQUAT', 'HINDU SQUAT', 'SHRIMP SQUAT', 'COSSACK SQUAT', 'DRAGON SQUAT', 'SISSY SQUAT'],
    PRESS: ['PUSH-UP', 'PIKE PUSH-UP', 'CHAIR DIPS', 'DIAMOND PUSH-UP', 'DECLINE PUSH-UP', 'WALL PUSH-UP', 'HINDU PUSH-UP', 'HANDSTAND HOLD', 'ARCHER PUSH-UP', 'PSEUDO PLANCHE PUSH-UP', 'EXPLOSIVE PUSH-UP', 'TYPEWRITER PUSH-UP', 'RING PUSH-UP', 'ONE-ARM PUSH-UP NEGATIVE', 'ONE-ARM PUSH-UP'],
    PULL: ['DOORFRAME PULL-UPS', 'TOWEL ROWS', 'BAND PULLS', 'DOOR ROWS', 'ISOMETRIC PULLS', 'BAND FACE PULL', 'SUPINE ROW', 'BAND BICEP CURL', 'DOORWAY CURL', 'BAND EXTERNAL ROTATION', 'BAND PULL-APART', 'AUSTRALIAN PULL-UP', 'ARCHER PULL-UP', 'L-SIT PULL-UP', 'ONE-ARM CHIN NEGATIVE'],
    HINGE: ['SINGLE LEG DEADLIFT', 'GLUTE BRIDGE', 'GOOD MORNINGS', 'HIP THRUST', 'HIP EXTENSION', 'SUPERMAN', 'REVERSE HYPER', 'BODYWEIGHT ROMANIAN DEADLIFT', 'PRONE BACK EXTENSION', 'HAMSTRING WALKOUT', 'DONKEY KICKS', 'SINGLE LEG GLUTE BRIDGE', 'NORDIC HAMSTRING CURL', 'PARTNER-ASSISTED HAMSTRING CURL', 'SLIDING LEG CURL'],
    CARRY: ['WEIGHTED WALKS', 'SUITCASE CARRY', 'OVERHEAD CARRY', 'LUNGES', 'BACKPACK WALKS', 'WAITER WALK', 'BOOK CARRY', 'BOTTOMS-UP CARRY', 'WALKING LUNGES', 'REVERSE LUNGES', 'LATERAL LUNGE WALK', 'FURNITURE SLIDER LUNGES', 'DEFICIT LUNGE', 'WALKING LUNGE COMPLEX', 'CURTSY LUNGE PROGRESSION'],
    CORE: ['PLANK', 'HOLLOW HOLDS', 'L-SIT', 'SIDE PLANK', 'MOUNTAIN CLIMBER', 'FLUTTER KICK', 'BICYCLE CRUNCH', 'DEAD BUG', 'RUSSIAN TWIST', 'WINDSHIELD WIPER', 'REVERSE CRUNCH', 'DRAGON FLAG PROGRESSION', 'AB WHEEL ROLLOUT', 'HOLLOW BODY ROCK', 'V-UP PROGRESSION'],
    HYBRID: ['BURPEE', 'TURKISH GET-UP', 'BEAR CRAWL TO PUSHUP', 'SQUAT THRUST', 'PLANK TO PIKE', 'LUNGE TO ROW', 'DEADLIFT TO BENT ROW', 'PUSHUP TO ROTATION'],
    LOWER_STRETCH: ['FORWARD FOLD', 'RUNNER\'S LUNGE', 'HAMSTRING STRETCH', 'PIGEON POSE', 'SEATED BUTTERFLY', 'FROG STRETCH', 'CALF STRETCH', 'QUAD STRETCH', 'FIGURE-4 STRETCH', 'LIZARD POSE', 'SEATED STRADDLE', 'HALF SPLIT'],
    UPPER_STRETCH: ['CHILD\'S POSE', 'CHEST OPENER', 'CROSS-BODY SHOULDER', 'TRICEP STRETCH', 'WRIST FLEXOR STRETCH', 'CAT-COW STRETCH', 'THREAD THE NEEDLE', 'DOORWAY PECTORAL STRETCH', 'OVERHEAD REACH', 'SIDE BEND STRETCH', 'WALL ANGEL', 'FOREARM STRETCH'],
    LOWER_MOBILITY: ['ANKLE CIRCLES', 'HIP CIRCLES', 'KNEE CIRCLES', 'SQUAT TO STAND', 'FIRE HYDRANT', 'LEG SWINGS', '90/90 HIP ROTATION', 'ADDUCTOR ROCK', 'HIP CARS', 'ANKLE DORSIFLEXION DRILL', 'WORLD\'S GREATEST STRETCH', 'SQUAT MOBILITY FLOW'],
    UPPER_MOBILITY: ['SHOULDER CARS', 'SCAPULAR PUSH-UPS', 'WALL SLIDES', 'THORACIC ROTATIONS', 'NECK CARS', 'WRIST CIRCLES', 'ELBOW CIRCLES', 'FOREARM PRONATION/SUPINATION', 'ARM CIRCLES', 'SCAPULAR PULL-UPS', 'THORACIC BRIDGE', 'FLOOR ANGELS']
  },
  GYM: {
    SQUAT: ['BACK SQUAT', 'FRONT SQUAT', 'GOBLET SQUAT', 'HACK SQUAT', 'LEG PRESS', 'BOX SQUAT', 'ZERCHER SQUAT', 'OVERHEAD SQUAT', 'BELT SQUAT', 'SAFETY BAR SQUAT', 'SPLIT SQUAT', 'HATFIELD SQUAT', 'ANDERSON SQUAT', 'PIN SQUAT', 'PAUSED SQUAT'],
    PRESS: ['BENCH PRESS', 'OVERHEAD PRESS', 'INCLINE PRESS', 'DUMBBELL PRESS', 'MACHINE CHEST PRESS', 'LANDMINE PRESS', 'PUSH PRESS', 'FLOOR PRESS', 'DECLINE BENCH PRESS', 'ARNOLD PRESS', 'CABLE CROSSOVER', 'Z-PRESS', 'PIN PRESS', 'BOARD PRESS', 'BOTTOMS-UP KB PRESS'],
    PULL: ['BARBELL ROW', 'WEIGHTED PULL-UP', 'LAT PULLDOWN', 'SEATED ROW', 'T-BAR ROW', 'FACE PULL', 'DUMBBELL ROW', 'STRAIGHT-ARM PULLDOWN', 'PENDLAY ROW', 'MEADOWS ROW', 'CABLE PULLOVERS', 'CHEST SUPPORTED ROW', 'WEIGHTED CHIN-UP', 'KROC ROW', 'SNATCH GRIP BTN PULLDOWN'],
    HINGE: ['DEADLIFT', 'ROMANIAN DEADLIFT', 'HIP THRUST', 'GOOD MORNING', 'BACK EXTENSION', 'KETTLEBELL SWING', 'SUMO DEADLIFT', 'DEFICIT DEADLIFT', 'TRAP BAR DEADLIFT', 'SNATCH GRIP DEADLIFT', 'RACK PULL', 'BANDED DEADLIFT', 'SUITCASE DEADLIFT', 'PAUSED DEADLIFT', 'REEVES DEADLIFT'],
    CARRY: ['FARMER CARRY', 'YOKE WALK', 'TRAP BAR CARRY', 'OVERHEAD WALK', 'SUITCASE CARRY', 'ZERCHER CARRY', 'KETTLEBELL LOADED WALK', 'SANDBAG CARRY', 'CROSS CARRY', 'FARMERS WALK ON TOES', 'WAITER WALK', 'DUCK WALK', 'ZERCHER YOKE CARRY', 'DOUBLE KETTLEBELL COMPLEX', 'UNEVEN LOADED CARRY'],
    CORE: ['AB WHEEL', 'HANGING LEG RAISE', 'CABLE CRUNCH', 'DECLINE SIT-UP', 'LANDMINE ROTATION', 'PALLOF PRESS', 'WEIGHTED PLANK', 'DRAGON FLAG', 'CABLE WOODCHOP', 'WEIGHTED RUSSIAN TWIST', 'SWISS BALL JACKKNIFE', 'HANGING WINDSHIELD WIPER', 'WEIGHTED DRAGON FLAG', 'STANDING AB WHEEL', 'TOES TO BAR'],
    HYBRID: ['CLEAN AND PRESS', 'SNATCH', 'THRUSTER', 'MAN MAKER', 'DEADLIFT TO BENT ROW', 'HANG CLEAN', 'KETTLEBELL COMPLEX', 'DEVILS PRESS'],
    LOWER_STRETCH: ['SEATED HAMSTRING STRETCH', 'LYING HAMSTRING STRETCH', 'KNEELING HIP FLEXOR STRETCH', 'SEATED PIRIFORMIS STRETCH', 'ADDUCTOR STRETCH MACHINE', 'STANDING QUAD STRETCH', 'FOAM ROLL QUADS/HAMSTRINGS', 'CALF STRETCH ON WEDGE', 'INNER THIGH MACHINE STRETCH', 'LYING GLUTE STRETCH', 'WALL CALF STRETCH', 'BANDED HAMSTRING STRETCH'],
    UPPER_STRETCH: ['PECTORAL STRETCH MACHINE', 'DOORWAY PECTORAL STRETCH', 'LYING CROSS-BODY STRETCH', 'OVERHEAD TRICEP STRETCH', 'LAT STRETCH', 'SEATED TWIST', 'FOAM ROLL BACK', 'WALL BICEP STRETCH', 'BEHIND NECK STRETCH', 'WRIST FLEXOR/EXTENSOR STRETCH', 'ROTATOR CUFF STRETCH', 'ASSISTED CHEST STRETCH'],
    LOWER_MOBILITY: ['BANDED ANKLE MOBILIZATION', 'BANDED HIP DISTRACTION', 'GOBLET SQUAT WITH PRYING', 'BANDED HIP ROTATION', 'WEIGHTED ANKLE DORSIFLEXION', 'COSSACK SQUAT TRANSITIONS', 'GLUTE ACTIVATION SERIES', 'DYNAMIC HIP FLEXOR MOBILITY', 'KETTLEBELL ADDUCTOR ROCK', 'ASSISTED SQUAT MOBILIZATION', 'BANDED LATERAL SQUATS', 'HIP CARS WITH BAND'],
    UPPER_MOBILITY: ['BANDED SHOULDER DISTRACTION', 'FOAM ROLLER THORACIC EXTENSION', 'PVC PASS-THROUGHS', 'KETTLEBELL ARMBAR', 'WALL SLIDE WITH ROTATION', 'INDIAN CLUB ROTATIONS', 'CABLE FACE PULL WITH ROTATION', 'FOREARM MOBILIZER', 'BANDED PULL-APARTS', 'THORACIC BRIDGE ON BENCH', 'HANGING SCAPULAR DEPRESSION', 'WEIGHTED WRIST ROTATIONS']
  },
  POOL: {
    SWIM: ['SPRINT LAPS', 'DISTANCE SWIM', 'INTERVAL WORK', 'FREESTYLE LAPS', 'BUTTERFLY DRILLS', 'BACKSTROKE WORK', 'BREASTSTROKE TECHNIQUE', 'MIXED STROKE TRAINING', 'PULL BUOY LAPS', 'KICKBOARD DRILLS', 'FINGER-TIP DRAG', '25M SPRINT REPEATS', 'PYRAMID SETS', 'DESCENDING INTERVALS', 'THRESHOLD TRAINING'],
    FLOAT: ['ACTIVE RECOVERY', 'VERTICAL TREAD', 'BACK FLOAT', 'SURVIVAL FLOAT', 'WATER TREAD INTERVALS', 'HANGING VERTICAL', 'STATIONARY SCULLING', 'RECOVERY POSITION', 'EGG BEATER KICK', 'ROTATIONAL FLOAT', 'DEEP WATER BOBBING', 'VERTICAL KICK HOLD', 'TREAD WITH HANDS UP', 'UNDERWATER RECOVERY', 'COMBAT SIDESTROKE'],
    BREATHE: ['UNDERWATER HOLD', 'BREATHING RHYTHM', 'HYPOXIC SET', 'UNDERWATER SWIM', 'BREATH CONTROL DRILL', 'BILATERAL BREATHING', '4-COUNT BREATHING', 'EXHALE PROGRESSION', 'CONTROLLED RECOVERY', 'PROGRESSIVE BREATH HOLD', 'RHYTHMIC BREATHING LADDER', 'CO2 TOLERANCE SET', 'UNDERWATER LENGTH TEST', 'BREATH HOLD INTERVALS', 'OXYGEN EFFICIENCY DRILL'],
    RESISTANCE: ['WATER JOGGING', 'AQUA PUSH-UPS', 'POOL WALL KICKS', 'WATER ARM CIRCLES', 'POOL SQUATS', 'WATER LUNGES', 'AQUA JUMPING JACKS', 'POOL TRICEP DIPS', 'AQUA TABATA INTERVALS', 'DEEP WATER BURPEES', 'WATER RESISTANCE PRESS', 'WATER PILATES SERIES'],
    HIIT: ['SPRINT-RECOVERY SETS', 'FOUR-STROKE CHALLENGE', 'TABATA SWIM PROTOCOL', 'POOL BURPEE LADDER', 'DEEP-SHALLOW INTERVALS', 'UNDERWATER AGILITY', 'VO2 MAX SET', 'ANAEROBIC THRESHOLD SET'],
    LOWER_STRETCH: ['POOL EDGE CALF STRETCH', 'POOL WALL QUAD STRETCH', 'POOL EDGE HAMSTRING STRETCH', 'FLOAT GLUTE STRETCH', 'WATER LUNGE STRETCH', 'WALL HIP FLEXOR STRETCH', 'SUPPORTED INNER THIGH STRETCH', 'WATER-ASSISTED SINGLE-LEG REACH', 'FLOATING FIGURE-4 STRETCH', 'WALL SPLIT STRETCH', 'ANKLE MOBILIZATION', 'WATER-SUPPORTED SQUAT STRETCH'],
    UPPER_STRETCH: ['POOL EDGE CHEST STRETCH', 'WATER ARM SWING STRETCH', 'WALL LAT STRETCH', 'FLOATING CHEST OPENER', 'WATER TRICEP STRETCH', 'WATER NECK RELEASE', 'FLOATING ARM REACHES', 'WATER-ASSISTED SHOULDER STRETCH', 'POOL EDGE WRIST STRETCH', 'FLOATING SHOULDER CIRCLES', 'WALL BICEP STRETCH', 'CROSS-BODY WATER STRETCH'],
    LOWER_MOBILITY: ['WATER ANKLE ROTATIONS', 'SHALLOW WATER HIP CIRCLES', 'WATER-ASSISTED SQUAT MOBILITY', 'WATER KNEE CIRCLES', 'FLOATING LEG SWINGS', 'SHALLOW KNEE-TO-CHEST', 'WATER CROSS-BODY LEG SWINGS', 'AQUA COSSACK MOBILITY', 'FLOATING HIP ROTATIONS', 'FLOATING PIKE POSITION', 'WATER-ASSISTED SINGLE-LEG BALANCE', 'HIP FLEXOR MOBILIZATION'],
    UPPER_MOBILITY: ['WATER ARM CIRCLES', 'FLOATING SHOULDER CARS', 'WATER T-SPINE ROTATIONS', 'WATER WRIST CIRCLES', 'POOL EDGE SCAPULAR PULLS', 'FLOATING THORACIC MOBILITY', 'WATER-ASSISTED ARM REACHES', 'NECK MOBILITY SEQUENCE', 'FLOATING WALL ANGELS', 'WATER FOREARM ROTATIONS', 'SHOULDER BLADE SQUEEZES', 'FLOATING THORACIC EXTENSION']
  },
  OUTDOOR: {
    RUN: ['SPRINT INTERVALS', 'DISTANCE RUN', 'HILL SPRINTS', 'TRAIL RUN', 'FARTLEK RUN', 'STADIUM STAIRS', 'TEMPO RUN', 'INCLINE DASH', 'PYRAMID INTERVALS', '30-60-90 INTERVALS', 'TABATA SPRINTS', 'GRINDER INTERVALS', 'THRESHOLD PACE RUN', 'LACTATE SHUTTLE RUN', 'PROGRESSION RUN'],
    CLIMB: ['TREE CLIMB', 'ROCK SCRAMBLE', 'STRUCTURE CLIMB', 'ROPE CLIMB', 'WALL CLIMB', 'BOULDERING', 'CARGO NET', 'NATURAL OBSTACLES', 'TRAVERSING', 'DYNO JUMPS', 'CAMPUS LADDER', 'TECHNICAL ROCK SEQUENCE', 'DYNAMIC CLIMBING SERIES', 'CAMPUS BOARD PROGRESSION', 'SYSTEM WALL TRAINING'],
    CARRY: ['HEAVY OBJECT CARRY', 'DISTANCE CARRY', 'AWKWARD CARRY', 'STONE CARRY', 'LOG CARRY', 'PARTNER CARRY', 'UPHILL LOAD CARRY', 'SAND BAG HAUL', 'BUCKET CARRY', 'TIRE FLIP', 'WATER JUG CARRY', 'UNEVEN LOAD CARRY', 'HEAVY BUCKET CHALLENGE', 'MULTI-OBJECT TRANSPORT', 'STONE LOADING SERIES'],
    CRAWL: ['GROUND MOVEMENT', 'LOW CRAWL', 'BEAR CRAWL', 'CRAB WALK', 'ARMY CRAWL', 'APE WALK', 'TACTICAL CRAWL', 'LIZARD CRAWL', 'GORILLA CRAWL', 'SPIDERMAN CRAWL', 'CROCODILE CRAWL', 'LATERAL BEAST CRAWL', 'SCORPION CRAWL', 'CRAWL COMPLEX', 'PARTNER RESISTANCE CRAWL'],
    JUMP: ['BOX JUMPS', 'DEPTH JUMPS', 'DISTANCE JUMPS', 'BROAD JUMP', 'VERTICAL LEAP', 'HURDLE JUMPS', 'SINGLE LEG JUMPS', 'LATERAL JUMPS', 'BURPEE JUMPS', 'TUCK JUMPS', 'STAR JUMPS', 'REACTIVE JUMP SERIES', 'PLYOMETRIC COMPLEX', 'SHOCK METHOD JUMPS', 'ALTITUDE DROP JUMPS'],
    HIIT: ['MOUNTAIN CLIMBERS', 'BURPEES', 'SQUAT JUMPS', 'HIGH KNEES', 'JUMPING JACKS', 'PLANK JACKS', 'SKATER JUMPS', 'SPLIT JUMPS', 'DEVILS PROTOCOL', 'DEATH BY BURPEE', 'EMOM CHALLENGE', 'TABATA COMPLEX'],
    OBSTACLE: ['WALL TRAVERSE', 'BALANCE BEAM', 'ROPE SWING', 'MONKEY BARS', 'A-FRAME CLIMB', 'MUD CRAWL', 'TRAIL AGILITY', 'TERRAIN NAVIGATION'],
    LOWER_STRETCH: ['STANDING HAMSTRING STRETCH', 'TRAIL-SIDE QUAD STRETCH', 'KNEELING HIP FLEXOR', 'TRAIL CALF STRETCH', 'SEATED BUTTERFLY', 'NATURAL SURFACE PIGEON', 'TRAIL LOG HAMSTRING STRETCH', 'STANDING FIGURE-4', 'ROCK-ASSISTED HIP STRETCH', 'TREE-SUPPORTED QUAD STRETCH', 'TRAIL STRADDLE STRETCH', 'NATURAL SURFACE SPLIT'],
    UPPER_STRETCH: ['TREE-ASSISTED CHEST STRETCH', 'STANDING TRICEP STRETCH', 'TRAIL-SIDE SHOULDER STRETCH', 'OUTDOOR THORACIC ROTATION', 'TREE LAT STRETCH', 'ROCK-ASSISTED PECTORAL STRETCH', 'BRANCH HANG STRETCH', 'LOG WRIST STRETCH', 'TRAIL-SIDE BACK RELEASE', 'OUTDOOR THORACIC EXTENSION', 'TRAIL CROSS-BODY STRETCH', 'TREE-ASSISTED ARM CIRCLES'],
    LOWER_MOBILITY: ['TRAIL ANKLE MOBILITY', 'ROCK-ASSISTED SQUAT MOBILITY', 'NATURAL SURFACE HIP CIRCLES', 'OUTDOOR KNEE CIRCLES', 'TRAIL-SIDE LEG SWINGS', 'UNEVEN TERRAIN MOBILITY', 'TRAIL WALKING KNEE LIFT', 'ROCK-TO-ROCK BALANCE', 'NATURAL SURFACE COSSACK', 'OUTDOOR HIP CARS', 'TRAIL LUNGE MATRIX', 'TERRAIN NAVIGATION MOBILITY'],
    UPPER_MOBILITY: ['OUTDOOR SHOULDER CARS', 'ROCK WALL SCAPULAR PULLS', 'TRAIL-SIDE THORACIC ROTATION', 'BRANCH HANG SCAPULAR PULL', 'TREE-ASSISTED ARM CIRCLES', 'WRIST MOBILITY FLOW', 'OUTDOOR NECK CARS', 'LOG PASS-THROUGHS', 'TERRAIN-ASSISTED THORACIC BRIDGE', 'TRAIL-SIDE ARM BARS', 'BRANCH HANG SHOULDER MOBILIZATION', 'ROCK PUSH-UP POSITION MOBILITY']
  }
};

const ExerciseDisplay = ({ exercise, index, total }) => {
  const [mounted, setMounted] = useState(false);
  const { location, actions } = useBusiness();
  const [pattern, setPattern] = useState('');
  const [difficulty, setDifficulty] = useState('beginner');
  const [progressPercent, setProgressPercent] = useState(0);
  
  // Add an entrance animation and find exercise pattern
  useEffect(() => {
    setMounted(true);
    
    // Find the pattern for this exercise
    if (location && exercise) {
      let patternFound = false;
      
      // Method 1: Check the exercisePatterns mapping
      if (exercisePatterns[location]) {
        for (const patternKey in exercisePatterns[location]) {
          if (exercisePatterns[location][patternKey].includes(exercise)) {
            setPattern(patternKey);
            
            // Get exercise difficulty and progression
            const exerciseDifficulty = actions.getExerciseDifficulty(exercise, patternKey, location);
            const progression = actions.getExerciseProgression(exercise, patternKey, location);
            
            setDifficulty(exerciseDifficulty);
            setProgressPercent(progression);
            patternFound = true;
            break;
          }
        }
      }
      
      // Method 2: If pattern still not found, query WorkoutContext directly
      if (!patternFound) {
        // Try to find which pattern contains this exercise in WorkoutContext
        for (const patternKey in actions.getExercisesForLocation(location)) {
          // Skip non-pattern keys like 'loading' or 'view'
          if (typeof actions.getExercisesForLocation(location)[patternKey] !== 'object') continue;
          
          const patternExercises = actions.getExercisesForLocation(location)[patternKey];
          if (patternExercises && patternExercises.includes(exercise)) {
            setPattern(patternKey);
            
            // Get exercise difficulty and progression
            const exerciseDifficulty = actions.getExerciseDifficulty(exercise, patternKey, location);
            const progression = actions.getExerciseProgression(exercise, patternKey, location);
            
            setDifficulty(exerciseDifficulty);
            setProgressPercent(progression);
            patternFound = true;
            break;
          }
        }
      }
      
      // Method 3: Fallback to keyword analysis if still not found
      if (!patternFound) {
        const exerciseLower = exercise.toLowerCase();
        
        // Check for press pattern keywords
        if (exerciseLower.includes('push') || 
            exerciseLower.includes('press') || 
            exerciseLower.includes('dip')) {
          setPattern('PRESS');
          const exerciseDifficulty = actions.getExerciseDifficulty(exercise, 'PRESS', location);
          const progression = actions.getExerciseProgression(exercise, 'PRESS', location);
          setDifficulty(exerciseDifficulty);
          setProgressPercent(progression);
          patternFound = true;
        }
        // Check for pulling pattern keywords
        else if (exerciseLower.includes('pull') || 
                exerciseLower.includes('row') || 
                exerciseLower.includes('chin') ||
                exerciseLower.includes('curl')) {
          setPattern('PULL');
          const exerciseDifficulty = actions.getExerciseDifficulty(exercise, 'PULL', location);
          const progression = actions.getExerciseProgression(exercise, 'PULL', location);
          setDifficulty(exerciseDifficulty);
          setProgressPercent(progression);
          patternFound = true;
        }
        // Check for stretch pattern keywords
        else if (exerciseLower.includes('stretch') || 
                exerciseLower.includes('fold') || 
                exerciseLower.includes('pose')) {
          // This is likely a stretch exercise
          const stretchPattern = exerciseLower.includes('leg') || 
                    exerciseLower.includes('hip') || 
                    exerciseLower.includes('hamstring') || 
                    exerciseLower.includes('calf') ? 'LOWER_STRETCH' : 'UPPER_STRETCH';
          setPattern(stretchPattern);
          
          // Get exercise difficulty and progression for stretches
          const exerciseDifficulty = actions.getExerciseDifficulty(exercise, stretchPattern, location);
          const progression = actions.getExerciseProgression(exercise, stretchPattern, location);
          
          setDifficulty(exerciseDifficulty);
          setProgressPercent(progression);
          patternFound = true;
        }
        // Check for mobility pattern keywords
        else if (exerciseLower.includes('mobil') || 
                exerciseLower.includes('circle') || 
                exerciseLower.includes('rotation')) {
          // This is likely a mobility exercise
          const mobilityPattern = exerciseLower.includes('leg') || 
                    exerciseLower.includes('hip') || 
                    exerciseLower.includes('ankle') || 
                    exerciseLower.includes('knee') ? 'LOWER_MOBILITY' : 'UPPER_MOBILITY';
          setPattern(mobilityPattern);
          
          // Get exercise difficulty and progression for mobility
          const exerciseDifficulty = actions.getExerciseDifficulty(exercise, mobilityPattern, location);
          const progression = actions.getExerciseProgression(exercise, mobilityPattern, location);
          
          setDifficulty(exerciseDifficulty);
          setProgressPercent(progression);
          patternFound = true;
        }
      }
      
      // If no pattern found after all attempts, set default values
      if (!patternFound) {
        console.log(`Pattern not found for exercise: ${exercise}`);
        setPattern('UNKNOWN');
        setDifficulty('beginner');
        setProgressPercent(25);
      }
    }
  }, [exercise, location, pattern, actions]);
  
  // Function to get a description for the movement pattern
  const getPatternDescription = (pattern) => {
    const descriptions = {
      'SQUAT': 'A knee-dominant movement that targets quads, glutes, and core',
      'PRESS': 'Pushing movement that works chest, shoulders, and triceps',
      'PULL': 'Upper body pull that targets back, biceps, and grip',
      'HINGE': 'Hip-dominant movement for posterior chain strength',
      'CARRY': 'Loaded movement that builds total body stability',
      'CORE': 'Abdominal and trunk stabilization exercise',
      'HYBRID': 'Compound movement combining multiple patterns',
      'SWIM': 'Endurance swimming technique and pattern',
      'FLOAT': 'Water-specific stability and recovery technique',
      'BREATHE': 'Respiratory control and breath work training',
      'RESISTANCE': 'Water-based resistance training movement',
      'HIIT': 'High-intensity interval for metabolic conditioning',
      'RUN': 'Lower body cardio and endurance movement',
      'CLIMB': 'Vertical movement requiring strength and skill',
      'CRAWL': 'Ground-based locomotion pattern for coordination',
      'JUMP': 'Explosive movement for power development',
      'OBSTACLE': 'Technical movement over environmental challenges',
      'STRETCH': 'Static position that lengthens muscles and improves flexibility',
      'MOBILITY': 'Dynamic movement that improves joint range of motion'
    };
    return descriptions[pattern] || 'Movement pattern';
  };

  // Check if this is a stretch or mobility exercise
  const isStretch = pattern?.includes('STRETCH');
  const isMobility = pattern?.includes('MOBILITY');
  
  // Get difficulty color theme
  const getDifficultyColors = () => {
    switch(difficulty) {
      case 'beginner':
        return 'bg-green-800 text-green-100';
      case 'intermediate':
        return 'bg-yellow-700 text-yellow-100';
      case 'advanced':
        return 'bg-red-700 text-red-100';
      default:
        return 'bg-zinc-800 text-work-red';
    }
  };
  
  // Generate stars based on difficulty
  const getDifficultyStars = () => {
    const stars = [];
    const starCount = 
      difficulty === 'beginner' ? 1 : 
      difficulty === 'intermediate' ? 2 : 
      difficulty === 'advanced' ? 3 : 1;
    
    for (let i = 0; i < starCount; i++) {
      stars.push(<span key={i}>★</span>);
    }
    
    for (let i = starCount; i < 3; i++) {
      stars.push(<span key={i + 3} className="opacity-30">★</span>);
    }
    
    return stars;
  };

  return (
    <div 
      className={`
        py-4 px-2 
        border-b border-zinc-800 last:border-b-0
        transition-opacity duration-500 ease-in-out
        ${mounted ? 'opacity-100' : 'opacity-0'}
        ${isStretch ? 'bg-gradient-to-r from-zinc-900 to-zinc-800' : ''}
        ${isMobility ? 'bg-gradient-to-r from-zinc-800 to-zinc-900' : ''}
      `}
    >
      {/* Top badge row with pattern and difficulty */}
      <div className="flex justify-between items-center mb-2">
        {/* Pattern badge */}
        {pattern && (
          <div className={`
            text-xs font-bold py-1 px-3 rounded-full
            ${isStretch ? 'bg-blue-900 text-blue-100' : ''}
            ${isMobility ? 'bg-green-900 text-green-100' : ''}
            ${!isStretch && !isMobility ? 'bg-zinc-800 text-work-red' : ''}
          `}>
            {/* Convert LOWER_STRETCH -> STRETCH (LOWER) */}
            {pattern.includes('_') 
              ? `${pattern.split('_')[1]} (${pattern.split('_')[0]})`
              : pattern}
          </div>
        )}
        
        {/* Difficulty badge */}
        {pattern && (
          <div className={`text-xs font-bold py-1 px-3 rounded-full ${getDifficultyColors()}`}>
            {difficulty.toUpperCase()} {getDifficultyStars()}
          </div>
        )}
      </div>
      
      {/* Exercise name */}
      <h2 className="text-2xl font-extrabold text-center">{exercise}</h2>
      
      {/* Pattern description */}
      {pattern && (
        <div className="text-xs text-zinc-400 text-center mt-1 max-w-xs mx-auto">
          {getPatternDescription(pattern.includes('_') ? pattern.split('_')[1] : pattern)}
        </div>
      )}
      
      {/* Progress bar */}
      {pattern && !isStretch && !isMobility && (
        <div className="mt-3 w-full px-4">
          <div className="text-xs text-zinc-500 flex justify-between mb-1">
            <span>BEGINNER</span>
            <span>ADVANCED</span>
          </div>
          <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
            <div 
              className={`h-1 rounded-full ${getDifficultyColors().split(' ')[0]}`} 
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          
          {difficulty === 'intermediate' && (
            <div className="text-xs text-center mt-1 text-yellow-400 font-bold">
              INTERMEDIATE EXERCISE
            </div>
          )}
          
          {difficulty === 'advanced' && (
            <div className="text-xs text-center mt-1 text-red-400 font-bold">
              ADVANCED EXERCISE
            </div>
          )}
        </div>
      )}
      
      {/* Special instructions for stretch or mobility */}
      {isStretch && (
        <div className="text-xs text-blue-300 text-center mt-2 max-w-xs mx-auto italic">
          Hold for 30-45 seconds, breathe deeply
        </div>
      )}
      
      {isMobility && (
        <div className="text-xs text-green-300 text-center mt-2 max-w-xs mx-auto italic">
          Perform 8-10 controlled repetitions
        </div>
      )}
      
      {/* Exercise number */}
      {typeof index === 'number' && typeof total === 'number' && (
        <div className="flex justify-center items-center mt-3">
          <span className="bg-zinc-900 text-zinc-400 text-xs py-1 px-3 rounded-full">
            {index + 1} / {total}
          </span>
        </div>
      )}
    </div>
  );
};

export default ExerciseDisplay;