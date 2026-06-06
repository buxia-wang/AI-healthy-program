const STORAGE_KEY = "ai-health-helper-v1";

const foodData = [
  { name: "熟米饭", serving: "1 小碗约 150g", grams: 150, kcal100: 116, category: "主食" },
  { name: "馒头", serving: "1 个约 100g", grams: 100, kcal100: 223, category: "主食" },
  { name: "玉米", serving: "1 根中等约 200g", grams: 200, kcal100: 95, category: "主食" },
  { name: "红薯", serving: "1 个中等约 200g", grams: 200, kcal100: 86, category: "主食" },
  { name: "面条", serving: "1 碗熟面约 250g", grams: 250, kcal100: 110, category: "主食" },
  { name: "鸡蛋", serving: "1 个约 50g", grams: 50, kcal100: 144, category: "蛋奶" },
  { name: "全脂牛奶", serving: "1 杯约 250ml", grams: 250, kcal100: 61, category: "蛋奶" },
  { name: "无糖酸奶", serving: "1 杯约 180g", grams: 180, kcal100: 72, category: "蛋奶" },
  { name: "鸡胸肉", serving: "1 掌心约 100g", grams: 100, kcal100: 133, category: "蛋白质" },
  { name: "瘦牛肉", serving: "1 掌心约 100g", grams: 100, kcal100: 125, category: "蛋白质" },
  { name: "豆腐", serving: "半盒约 150g", grams: 150, kcal100: 84, category: "蛋白质" },
  { name: "三文鱼", serving: "1 份约 100g", grams: 100, kcal100: 208, category: "蛋白质" },
  { name: "苹果", serving: "1 个中等约 200g", grams: 200, kcal100: 52, category: "水果" },
  { name: "香蕉", serving: "1 根约 120g", grams: 120, kcal100: 89, category: "水果" },
  { name: "橙子", serving: "1 个约 180g", grams: 180, kcal100: 47, category: "水果" },
  { name: "西兰花", serving: "1 碗约 150g", grams: 150, kcal100: 36, category: "蔬菜" },
  { name: "番茄", serving: "1 个约 150g", grams: 150, kcal100: 18, category: "蔬菜" },
  { name: "黄瓜", serving: "1 根约 200g", grams: 200, kcal100: 16, category: "蔬菜" },
  { name: "炒青菜", serving: "1 盘约 200g", grams: 200, kcal100: 75, category: "蔬菜" },
  { name: "花生", serving: "1 小把约 30g", grams: 30, kcal100: 567, category: "坚果" },
  { name: "核桃", serving: "2-3 个约 30g", grams: 30, kcal100: 646, category: "坚果" },
  { name: "食用油", serving: "1 汤勺约 10g", grams: 10, kcal100: 884, category: "调味" },
  { name: "奶茶", serving: "1 杯约 500ml", grams: 500, kcal100: 80, category: "饮品" },
  { name: "可乐", serving: "1 听约 330ml", grams: 330, kcal100: 43, category: "饮品" },
  { name: "番茄炒蛋", serving: "1 盘约 250g", grams: 250, kcal100: 105, category: "中餐菜肴" },
  { name: "宫保鸡丁", serving: "1 盘约 250g", grams: 250, kcal100: 165, category: "中餐菜肴" },
  { name: "鱼香肉丝", serving: "1 盘约 250g", grams: 250, kcal100: 175, category: "中餐菜肴" },
  { name: "麻婆豆腐", serving: "1 盘约 250g", grams: 250, kcal100: 130, category: "中餐菜肴" },
  { name: "红烧肉", serving: "1 小份约 150g", grams: 150, kcal100: 360, category: "中餐菜肴" },
  { name: "清蒸鱼", serving: "1 份约 200g", grams: 200, kcal100: 125, category: "中餐菜肴" },
  { name: "水煮牛肉", serving: "1 份约 300g", grams: 300, kcal100: 185, category: "中餐菜肴" },
  { name: "青椒肉丝", serving: "1 盘约 250g", grams: 250, kcal100: 145, category: "中餐菜肴" },
  { name: "炒饭", serving: "1 盘约 300g", grams: 300, kcal100: 175, category: "中餐主食" },
  { name: "牛肉面", serving: "1 碗约 500g", grams: 500, kcal100: 115, category: "中餐主食" },
  { name: "兰州拉面", serving: "1 碗约 500g", grams: 500, kcal100: 105, category: "中餐主食" },
  { name: "饺子", serving: "10 个约 250g", grams: 250, kcal100: 220, category: "中餐主食" },
  { name: "小笼包", serving: "6 个约 180g", grams: 180, kcal100: 230, category: "中餐主食" },
  { name: "粥", serving: "1 碗约 300g", grams: 300, kcal100: 46, category: "中餐主食" },
  { name: "火锅", serving: "1 人份约 600g", grams: 600, kcal100: 150, category: "聚餐" },
  { name: "烤鸭", serving: "1 份约 200g", grams: 200, kcal100: 300, category: "中餐菜肴" },
  { name: "汉堡", serving: "1 个约 220g", grams: 220, kcal100: 250, category: "西餐快餐" },
  { name: "薯条", serving: "1 中份约 120g", grams: 120, kcal100: 312, category: "西餐快餐" },
  { name: "披萨", serving: "2 片约 200g", grams: 200, kcal100: 266, category: "西餐快餐" },
  { name: "意大利面", serving: "1 盘约 300g", grams: 300, kcal100: 155, category: "西餐主食" },
  { name: "牛排", serving: "1 份约 180g", grams: 180, kcal100: 220, category: "西餐菜肴" },
  { name: "凯撒沙拉", serving: "1 份约 250g", grams: 250, kcal100: 135, category: "西餐菜肴" },
  { name: "三明治", serving: "1 个约 180g", grams: 180, kcal100: 230, category: "西餐主食" },
  { name: "燕麦粥", serving: "1 碗约 250g", grams: 250, kcal100: 70, category: "早餐" },
  { name: "煎培根", serving: "3 片约 45g", grams: 45, kcal100: 540, category: "西餐早餐" },
  { name: "鸡肉卷", serving: "1 个约 220g", grams: 220, kcal100: 210, category: "西餐快餐" }
];

const exerciseData = [
  { name: "散步", met: 3.0 },
  { name: "快走", met: 4.3 },
  { name: "慢跑", met: 7.0 },
  { name: "跑步", met: 9.8 },
  { name: "骑行", met: 6.8 },
  { name: "游泳", met: 8.0 },
  { name: "跳绳", met: 11.0 },
  { name: "力量训练", met: 5.0 },
  { name: "瑜伽", met: 2.5 },
  { name: "家务", met: 3.5 },
  { name: "爬楼梯", met: 8.8 },
  { name: "广场舞", met: 4.5 }
];

const groupAdviceMap = {
  teen: {
    title: "儿童/青少年",
    body: "不建议套用成人 BMI 分级，也不建议直接制定热量缺口。应关注生长曲线、饮食结构、睡眠和户外活动，必要时咨询儿科或营养专业人士。"
  },
  elderly: {
    title: "老年人",
    body: "不宜过度节食，重点关注肌肉量、蛋白质摄入、平衡能力和规律活动。运动应从低强度开始，避免突然增加负荷。"
  },
  diabetes: {
    title: "糖尿病",
    body: "建议记录碳水来源和进餐时间。运动前后注意血糖变化，使用胰岛素或降糖药者尤其要警惕低血糖风险。"
  },
  hypertension: {
    title: "高血压",
    body: "重点关注少盐、规律运动、体重管理和睡眠。血压控制不稳或有胸闷头晕时，不建议自行做高强度运动。"
  },
  hyperlipidemia: {
    title: "高血脂",
    body: "优先减少油炸食物、反式脂肪和过量精制糖，增加蔬菜、全谷物、鱼类和规律有氧运动。"
  },
  menstruation: {
    title: "女性生理期",
    body: "经期体重上升常与水分波动有关，不必过度焦虑。疼痛或疲劳明显时，可选择散步、拉伸等温和活动。"
  },
  pregnancy: {
    title: "孕期/备孕/哺乳",
    body: "不建议使用本工具制定减脂热量缺口。体重增长、营养补充和运动强度应遵医嘱或咨询专业人士。"
  },
  fitness: {
    title: "健身人群",
    body: "建议同时记录围度、训练表现和蛋白质摄入。减脂期不要只看体重，增肌期也要关注体脂变化。"
  },
  kidney: {
    title: "肾病/痛风",
    body: "蛋白质、嘌呤和饮水建议需要个体化，不建议自行采用高蛋白或极端低碳饮食。"
  },
  heart: {
    title: "心血管病史",
    body: "运动计划应经过医生确认。出现胸痛、胸闷、异常气短、心悸或头晕时，应停止运动并及时就医。"
  }
};

const defaultState = {
  profile: {
    name: "",
    sex: "female",
    age: 30,
    birthDate: "",
    height: 165,
    weight: 60,
    waist: "",
    activity: 1.2,
    goal: "maintain",
    conditions: []
  },
  records: {}
};

let state = loadState();
let pediatricBmiRows = [];

const ids = [
  "name",
  "sex",
  "age",
  "birthDate",
  "height",
  "weight",
  "waist",
  "activity",
  "goal",
  "recordDate",
  "manualIntake",
  "manualExercise",
  "foodPickerSearch",
  "foodQty",
  "customFoodCalories",
  "customFoodName",
  "exerciseSelect",
  "exerciseMinutes",
  "intensity",
  "foodSearch"
];

const el = Object.fromEntries(ids.map((id) => [id, document.getElementById(id)]));

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? mergeState(defaultState, saved) : structuredClone(defaultState);
  } catch {
    return structuredClone(defaultState);
  }
}

function mergeState(base, saved) {
  return {
    ...base,
    ...saved,
    profile: { ...base.profile, ...saved.profile },
    records: saved.records || {}
  };
}

function saveState(status = "已保存") {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  document.getElementById("saveStatus").textContent = status;
  if (status === "已保存" || status === "已清空") {
    setHeaderEditing(false);
  }
}

function setHeaderEditing(isEditing) {
  document.body.classList.toggle("header-editing", isEditing);
  const editButton = document.getElementById("editDataBtn");
  if (editButton) {
    editButton.setAttribute("aria-expanded", String(isEditing));
  }
}

function todayKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function activeDate() {
  return el.recordDate.value || todayKey();
}

function getDayRecord(date = activeDate()) {
  if (!state.records[date]) {
    state.records[date] = { foods: [], exercises: [], manualIntake: "", manualExercise: "" };
  }
  state.records[date].foods ||= [];
  state.records[date].exercises ||= [];
  state.records[date].manualIntake ??= "";
  state.records[date].manualExercise ??= "";
  return state.records[date];
}

function caloriesForFood(food, qty = 1) {
  return Math.round(food.kcal100 * food.grams / 100 * qty);
}

function exerciseCalories(exercise, minutes, weight, intensity = 1) {
  return Math.round(exercise.met * intensity * 3.5 * weight / 200 * minutes);
}

function calculateProfile() {
  const p = state.profile;
  const heightM = Number(p.height) / 100;
  const weight = Number(p.weight);
  const age = Number(p.age);
  const bmi = heightM > 0 ? weight / (heightM * heightM) : 0;
  const bmr = p.sex === "male"
    ? 10 * weight + 6.25 * Number(p.height) - 5 * age + 5
    : 10 * weight + 6.25 * Number(p.height) - 5 * age - 161;
  const tdee = bmr * Number(p.activity);
  const target = targetCalories(tdee, p.goal, p.conditions);
  const waistHeight = p.waist ? Number(p.waist) / Number(p.height) : null;
  const ageMonths = getAgeMonths(p);
  const pediatric = getPediatricBmiResult(bmi, p.sex, ageMonths);
  return { bmi, bmr, tdee, target, waistHeight, ageMonths, pediatric };
}

function targetCalories(tdee, goal, conditions) {
  const cautious = conditions.includes("teen") || conditions.includes("pregnancy");
  if (cautious) return tdee;
  if (goal === "gentleLoss") return tdee - 300;
  if (goal === "loss") return tdee - 500;
  if (goal === "muscle") return tdee + 200;
  return tdee;
}

function bmiCategory(bmi, age, conditions) {
  if (age <= 18 || conditions.includes("teen")) {
    return { text: "儿童青少年需按年龄和性别看生长百分位", cls: "risk-warn" };
  }
  if (bmi < 18.5) return { text: "偏瘦", cls: "risk-warn" };
  if (bmi < 24) return { text: "正常范围", cls: "risk-ok" };
  if (bmi < 28) return { text: "超重", cls: "risk-warn" };
  return { text: "肥胖风险较高", cls: "risk-high" };
}

function getAgeMonths(profile) {
  if (profile.birthDate) {
    const birth = new Date(`${profile.birthDate}T00:00:00`);
    const now = new Date();
    if (!Number.isNaN(birth.getTime()) && birth <= now) {
      const years = now.getFullYear() - birth.getFullYear();
      const months = now.getMonth() - birth.getMonth();
      const dayAdjust = now.getDate() < birth.getDate() ? -1 : 0;
      return years * 12 + months + dayAdjust;
    }
  }
  const age = Number(profile.age);
  return Number.isFinite(age) ? Math.round(age * 12 + 6) : null;
}

function getPediatricBmiResult(bmi, sex, ageMonths) {
  if (!Number.isFinite(bmi) || !Number.isFinite(ageMonths)) return null;
  if (ageMonths < 24) {
    return {
      available: false,
      text: "2岁以下不适合使用 BMI-for-age 百分位，建议使用婴幼儿生长曲线并咨询儿科医生。"
    };
  }
  if (ageMonths > 240 || !pediatricBmiRows.length) {
    return {
      available: false,
      text: pediatricBmiRows.length ? "儿童青少年 BMI 百分位适用于 2-20 岁。" : "儿童青少年 BMI 百分位数据正在加载。"
    };
  }
  const sexCode = sex === "male" ? 1 : 2;
  const row = interpolatePediatricRow(sexCode, ageMonths);
  if (!row) return null;
  const z = row.L === 0
    ? Math.log(bmi / row.M) / row.S
    : (Math.pow(bmi / row.M, row.L) - 1) / (row.L * row.S);
  const percentile = normalCdf(z) * 100;
  return {
    available: true,
    percentile,
    z,
    category: pediatricCategory(percentile),
    ageMonths
  };
}

function interpolatePediatricRow(sexCode, ageMonths) {
  const rows = pediatricBmiRows.filter((row) => row.sex === sexCode);
  if (!rows.length) return null;
  const exact = rows.find((row) => row.ageMonths === ageMonths);
  if (exact) return exact;
  const lower = [...rows].reverse().find((row) => row.ageMonths <= ageMonths);
  const upper = rows.find((row) => row.ageMonths >= ageMonths);
  if (!lower) return upper;
  if (!upper) return lower;
  if (lower.ageMonths === upper.ageMonths) return lower;
  const ratio = (ageMonths - lower.ageMonths) / (upper.ageMonths - lower.ageMonths);
  return {
    sex: sexCode,
    ageMonths,
    L: lower.L + (upper.L - lower.L) * ratio,
    M: lower.M + (upper.M - lower.M) * ratio,
    S: lower.S + (upper.S - lower.S) * ratio
  };
}

function normalCdf(z) {
  const sign = z < 0 ? -1 : 1;
  const x = Math.abs(z) / Math.sqrt(2);
  const t = 1 / (1 + 0.3275911 * x);
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const erf = 1 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
  return 0.5 * (1 + sign * erf);
}

function pediatricCategory(percentile) {
  if (percentile < 5) return "偏瘦";
  if (percentile < 85) return "健康体重范围";
  if (percentile < 95) return "超重范围";
  return "肥胖范围";
}

function waistCategory(ratio) {
  if (!ratio) return "未填写腰围，无法评估腹型肥胖风险。";
  if (ratio < 0.5) return "腰高比低于 0.5，腹部脂肪风险相对较低。";
  if (ratio < 0.6) return "腰高比达到 0.5 以上，建议关注腹部脂肪和腰围趋势。";
  return "腰高比较高，建议结合血压、血糖、血脂情况咨询医生或体检。";
}

function dailyTotals(record) {
  const foodTotal = record.foods.reduce((sum, item) => sum + item.kcal, 0);
  const exerciseTotal = record.exercises.reduce((sum, item) => sum + item.kcal, 0);
  const manualIntake = Number(record.manualIntake);
  const manualExercise = Number(record.manualExercise);
  const hasManualIntake = record.manualIntake !== "" && Number.isFinite(manualIntake);
  const hasManualExercise = record.manualExercise !== "" && Number.isFinite(manualExercise);
  return {
    foodTotal,
    exerciseTotal,
    intake: hasManualIntake ? manualIntake : foodTotal,
    exercise: hasManualExercise ? manualExercise : exerciseTotal,
    hasManualIntake,
    hasManualExercise
  };
}

function formatKcal(value) {
  if (!Number.isFinite(value)) return "--";
  return `${Math.round(value)} kcal`;
}

function profileFromForm() {
  const conditions = Array.from(document.querySelectorAll("#conditionChips input:checked")).map((item) => item.value);
  state.profile = {
    name: el.name.value.trim(),
    sex: el.sex.value,
  age: Number(el.age.value),
    birthDate: el.birthDate.value,
    height: Number(el.height.value),
    weight: Number(el.weight.value),
    waist: el.waist.value ? Number(el.waist.value) : "",
    activity: Number(el.activity.value),
    goal: el.goal.value,
    conditions
  };
}

function fillForm() {
  const p = state.profile;
  el.name.value = p.name || "";
  el.sex.value = p.sex;
  el.age.value = p.age;
  el.birthDate.value = p.birthDate || "";
  el.height.value = p.height;
  el.weight.value = p.weight;
  el.waist.value = p.waist || "";
  el.activity.value = String(p.activity);
  el.goal.value = p.goal;
  document.querySelectorAll("#conditionChips input").forEach((input) => {
    input.checked = p.conditions.includes(input.value);
  });
}

function renderMetrics() {
  profileFromForm();
  const calc = calculateProfile();
  const category = bmiCategory(calc.bmi, state.profile.age, state.profile.conditions);
  document.getElementById("bmiValue").textContent = calc.bmi ? calc.bmi.toFixed(1) : "--";
  const bmiText = document.getElementById("bmiText");
  if (isPediatricProfile(state.profile) && calc.pediatric?.available) {
    bmiText.textContent = `第 ${Math.round(calc.pediatric.percentile)} 百分位，${calc.pediatric.category}`;
    bmiText.className = calc.pediatric.percentile >= 95 || calc.pediatric.percentile < 5 ? "risk-warn" : "risk-ok";
  } else if (isPediatricProfile(state.profile) && calc.pediatric) {
    bmiText.textContent = calc.pediatric.text;
    bmiText.className = "risk-warn";
  } else {
    bmiText.textContent = category.text;
    bmiText.className = category.cls;
  }
  document.getElementById("bmrValue").textContent = formatKcal(calc.bmr);
  document.getElementById("tdeeValue").textContent = formatKcal(calc.tdee);
  document.getElementById("targetValue").textContent = formatKcal(calc.target);
  document.getElementById("targetText").textContent = targetText(state.profile.goal, state.profile.conditions);
  renderNarrative(calc, category);
  renderGroupAdvice();
  renderDailySummary();
  renderDeficitOptions(calc);
}

function targetText(goal, conditions) {
  if (conditions.includes("teen") || conditions.includes("pregnancy")) {
    return "特殊阶段暂不建议自动制造热量缺口";
  }
  const map = {
    maintain: "维持体重，不主动制造缺口",
    gentleLoss: "约每日 300 kcal 缺口",
    loss: "约每日 500 kcal 缺口",
    muscle: "约每日 200 kcal 盈余"
  };
  return map[goal] || "根据目标自动估算";
}

function renderNarrative(calc, category) {
  const p = state.profile;
  const name = p.name || "当前用户";
  const record = getDayRecord();
  const totals = dailyTotals(record);
  const net = totals.intake - totals.exercise;
  const target = Math.round(calc.target);
  const balance = Number.isFinite(target) ? net - target : 0;
  const isTeen = p.age <= 18 || p.conditions.includes("teen");
  const isPregnancy = p.conditions.includes("pregnancy");
  const flags = [];
  const actions = [];

  if (isTeen) {
    if (calc.pediatric?.available) {
      flags.push(`儿童青少年 BMI：约第 ${Math.round(calc.pediatric.percentile)} 百分位，属于“${calc.pediatric.category}”。`);
    } else if (calc.pediatric?.text) {
      flags.push(calc.pediatric.text);
    } else {
      flags.push("未成年人：需要按年龄、性别、生长曲线和百分位判断，不能直接套成人 BMI。");
    }
    actions.push("让监护人记录身高体重趋势，优先保证睡眠、蛋白质、蔬菜和规律运动。");
  } else if (calc.bmi < 18.5) {
    flags.push("BMI 偏低：可能存在能量摄入不足、肌肉量不足或近期体重下降问题。");
    actions.push("先不要制造热量缺口，优先提高三餐质量和力量训练，必要时咨询医生排查原因。");
  } else if (calc.bmi < 24) {
    flags.push("BMI 在成人正常范围：当前体重风险相对较低。");
    actions.push("重点维持稳定体重，记录腰围、运动和饮食结构，不必追求过低体重。");
  } else if (calc.bmi < 28) {
    flags.push("BMI 达到超重范围：建议关注腰围、血压、血糖和血脂。");
    actions.push("可以从每日 300 kcal 左右的小缺口开始，避免突然极端节食。");
  } else {
    flags.push("BMI 达到肥胖风险范围：体重相关代谢风险会升高。");
    actions.push("建议配合体检数据制定计划；减重速度以稳定、可持续为主。");
  }

  if (calc.waistHeight) {
    if (calc.waistHeight >= 0.6) {
      flags.push(`腰高比 ${calc.waistHeight.toFixed(2)}：腹型肥胖风险较高。`);
      actions.push("优先减少含糖饮料、夜宵和高油食物，并增加饭后步行。");
    } else if (calc.waistHeight >= 0.5) {
      flags.push(`腰高比 ${calc.waistHeight.toFixed(2)}：提示腹部脂肪需要关注。`);
      actions.push("建议每周固定时间测腰围，观察 4 周趋势。");
    } else {
      flags.push(`腰高比 ${calc.waistHeight.toFixed(2)}：腹部脂肪风险相对较低。`);
    }
  } else {
    flags.push("未填写腰围：无法判断腹型肥胖风险，建议补充腰围。");
  }

  if (Number.isFinite(target) && totals.intake > 0) {
    if (balance > 300) {
      flags.push(`今天净摄入比目标高约 ${Math.round(balance)} kcal。`);
      actions.push("今天可以减少加餐或安排快走；明天不需要报复性少吃。");
    } else if (balance < -700) {
      flags.push(`今天净摄入比目标低约 ${Math.abs(Math.round(balance))} kcal，缺口偏大。`);
      actions.push("长期过低摄入可能影响睡眠、情绪、训练恢复和基础代谢。");
    } else {
      flags.push("今天净摄入接近目标，热量节奏比较可控。");
    }
  } else {
    flags.push("今天还没有有效热量记录，暂时无法分析当日能量平衡。");
  }

  if (p.conditions.includes("diabetes")) actions.push("糖尿病人群应同时记录碳水来源和血糖变化，运动前后注意低血糖风险。");
  if (p.conditions.includes("hypertension")) actions.push("高血压人群优先控制盐和体重，运动从中低强度开始，避免突然冲高强度。");
  if (p.conditions.includes("hyperlipidemia")) actions.push("高血脂人群重点减少油炸、反式脂肪和过量精制糖，增加鱼类、豆制品和蔬菜。");
  if (isPregnancy) actions.push("孕期、备孕或哺乳期不建议用本工具制造减脂缺口，体重和营养目标应遵医嘱。");
  if (p.conditions.includes("elderly")) actions.push("老年人不宜过度节食，应重视蛋白质、抗阻训练和平衡能力。");
  if (p.conditions.includes("fitness")) actions.push("健身人群建议同时看体重、围度、训练表现和蛋白质摄入，不只看 BMI。");

  const risk = riskSummary(calc, p, balance, totals);
  document.getElementById("healthNarrative").innerHTML = `
    <div class="analysis-card">
      <span class="risk-pill ${risk.cls}">${risk.label}</span>
      <p>${name}：${risk.summary}</p>
    </div>
    <div class="analysis-card">
      <strong>判断依据</strong>
      <ul class="analysis-list">${flags.slice(0, 6).map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
    <div class="analysis-card">
      <strong>优先建议</strong>
      <ul class="analysis-list">${dedupe(actions).slice(0, 6).map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
  `;
}

function riskSummary(calc, profile, balance, totals) {
  let score = 0;
  if (profile.age <= 18 || profile.conditions.includes("teen")) score += 2;
  if (calc.pediatric?.available && (calc.pediatric.percentile < 5 || calc.pediatric.percentile >= 95)) score += 2;
  else if (calc.pediatric?.available && calc.pediatric.percentile >= 85) score += 1;
  if (profile.conditions.includes("pregnancy")) score += 2;
  if (["diabetes", "hypertension", "hyperlipidemia", "kidney", "heart"].some((key) => profile.conditions.includes(key))) score += 2;
  if (calc.bmi < 18.5 || calc.bmi >= 28) score += 2;
  else if (calc.bmi >= 24) score += 1;
  if (calc.waistHeight >= 0.6) score += 2;
  else if (calc.waistHeight >= 0.5) score += 1;
  if (totals.intake > 0 && (balance > 500 || balance < -800)) score += 1;

  if (score >= 5) {
    return {
      cls: "risk-high",
      label: "需要谨慎管理",
      summary: "存在多个需要关注的因素，本工具只能做生活方式估算，建议结合体检数据或医生意见制定计划。"
    };
  }
  if (score >= 2) {
    return {
      cls: "risk-warn",
      label: "建议重点关注",
      summary: "目前有可改善的风险点，适合先从饮食记录、腰围趋势和规律运动开始调整。"
    };
  }
  return {
    cls: "risk-ok",
    label: "整体较稳定",
    summary: "从当前输入看，体重和能量目标较可控，继续保持记录并观察 2-4 周趋势。"
  };
}

function isPediatricProfile(profile) {
  return Number(profile.age) <= 18 || profile.conditions.includes("teen");
}

async function loadPediatricBmiData() {
  try {
    const response = await fetch("./bmiagerev.csv?v=1");
    const text = await response.text();
    pediatricBmiRows = text.trim().split(/\r?\n/).slice(1).map((line) => {
      const [sex, ageMonths, L, M, S] = line.split(",");
      return {
        sex: Number(sex),
        ageMonths: Number(ageMonths),
        L: Number(L),
        M: Number(M),
        S: Number(S)
      };
    }).filter((row) => Number.isFinite(row.sex) && Number.isFinite(row.ageMonths));
  } catch {
    pediatricBmiRows = [];
  }
}

function dedupe(items) {
  return Array.from(new Set(items));
}

function renderFoodOptions() {
  const keyword = el.foodPickerSearch.value.trim();
  const list = foodData.filter((food) => matchesFood(food, keyword)).slice(0, 40);
  document.getElementById("foodMultiPicker").innerHTML = list.map((food) => `
    <label class="food-choice">
      <input type="checkbox" value="${foodData.indexOf(food)}" />
      <span>
        <strong>${food.name}</strong>
        <span>${food.category}，${food.serving}，约 ${caloriesForFood(food)} kcal</span>
      </span>
    </label>
  `).join("");
  renderFoodSelectedHint();
}

function renderExerciseOptions() {
  el.exerciseSelect.innerHTML = exerciseData
    .map((item, index) => `<option value="${index}">${item.name}（MET ${item.met}）</option>`)
    .join("");
}

function renderFoodLibrary() {
  const keyword = el.foodSearch.value.trim();
  const list = foodData.filter((food) => matchesFood(food, keyword));
  document.getElementById("foodLibrary").innerHTML = list.map((food) => `
    <article class="library-card">
      <strong>${food.name}</strong>
      <p>${food.category}，${food.serving}</p>
      <p>约 ${caloriesForFood(food)} kcal，${food.kcal100} kcal/100g</p>
    </article>
  `).join("");
}

function matchesFood(food, keyword) {
  if (!keyword) return true;
  return food.name.includes(keyword) || food.category.includes(keyword) || food.serving.includes(keyword);
}

function renderDailySummary() {
  const record = getDayRecord();
  const calc = calculateProfile();
  const totals = dailyTotals(record);
  const intake = totals.intake;
  const exercise = totals.exercise;
  const net = intake - exercise;
  const target = Math.round(calc.target);
  const balance = Number.isFinite(target) ? net - target : 0;
  el.manualIntake.value = record.manualIntake;
  el.manualExercise.value = record.manualExercise;
  document.getElementById("todayIntake").textContent = formatKcal(intake);
  document.getElementById("todayExercise").textContent = formatKcal(exercise);
  document.getElementById("todayBalance").textContent = Number.isFinite(target)
    ? `${balance >= 0 ? "超出" : "低于"} ${Math.abs(Math.round(balance))} kcal`
    : "--";
  const progress = target > 0 ? Math.min(100, Math.max(0, net / target * 100)) : 0;
  document.getElementById("calorieProgress").style.width = `${progress}%`;
  document.getElementById("totalModeHint").textContent = totals.hasManualIntake || totals.hasManualExercise
    ? `当前使用手动总数。清单汇总为：饮食 ${totals.foodTotal} kcal，运动 ${totals.exerciseTotal} kcal。`
    : "留空时，系统会按饮食和运动清单自动汇总。";
  document.getElementById("todayAdvice").textContent = dailyAdvice(balance, intake, target);
  document.getElementById("foodListTotal").textContent = `合计 ${totals.foodTotal} kcal`;
  renderRecords("foodList", record.foods, "food");
  renderRecords("exerciseList", record.exercises, "exercise");
}

function dailyAdvice(balance, intake, target) {
  if (!Number.isFinite(target) || target <= 0) return "先完善基础档案。";
  if (intake === 0) return "今天还没有记录饮食。先记主食、饮料和油脂，误差会小很多。";
  if (balance > 250) return "今天已明显超过目标。可以减少加餐，或选择饭后散步、快走等温和活动。";
  if (balance < -600) return "今天低于目标较多。长期过低摄入可能影响恢复、睡眠和代谢。";
  return "今日热量接近目标。继续关注食物质量、蛋白质、蔬菜和睡眠。";
}

function renderRecords(containerId, items, type) {
  const container = document.getElementById(containerId);
  if (!items.length) {
    container.innerHTML = "<p>暂无记录。</p>";
    return;
  }
  container.innerHTML = items.map((item, index) => `
    <div class="record-item">
      <div>
        <strong>${item.name}</strong>
        <p>${item.detail}，${item.kcal} kcal</p>
      </div>
      <button type="button" data-type="${type}" data-index="${index}">删除</button>
    </div>
  `).join("");
}

function renderDeficitOptions(calc) {
  const safeDeficit = state.profile.conditions.includes("teen") || state.profile.conditions.includes("pregnancy");
  if (safeDeficit) {
    document.getElementById("deficitOptions").innerHTML = `
      <article class="advice-card">
        <strong>谨慎提示</strong>
        <p>当前特殊阶段不建议自动计算减脂缺口，请优先咨询专业人士。</p>
      </article>
    `;
    return;
  }
  const targetDeficit = state.profile.goal === "loss" ? 500 : state.profile.goal === "gentleLoss" ? 300 : 200;
  const chosen = ["快走", "慢跑", "骑行", "游泳", "力量训练"].map((name) => exerciseData.find((item) => item.name === name));
  document.getElementById("deficitOptions").innerHTML = chosen.map((item) => {
    const perMinute = exerciseCalories(item, 1, state.profile.weight, 1);
    const minutes = Math.max(1, Math.round(targetDeficit / perMinute));
    return `
      <article class="library-card">
        <strong>${item.name}</strong>
        <p>约 ${minutes} 分钟可消耗 ${targetDeficit} kcal</p>
        <p>实际消耗会受速度、强度和身体状态影响。</p>
      </article>
    `;
  }).join("");
}

function renderGroupAdvice() {
  const selected = state.profile.conditions.length
    ? state.profile.conditions
    : ["fitness", "hypertension", "diabetes"];
  document.getElementById("groupAdvice").innerHTML = selected.map((key) => {
    const item = groupAdviceMap[key];
    return `
      <article class="advice-card">
        <strong>${item.title}</strong>
        <p>${item.body}</p>
      </article>
    `;
  }).join("");
}

function addFood(event) {
  event.preventDefault();
  const customKcal = Number(el.customFoodCalories.value);
  const customName = el.customFoodName.value.trim();
  const qty = Number(el.foodQty.value) || 1;
  const selectedFoods = getSelectedFoodIndexes();
  if (customKcal && customName) {
    getDayRecord().foods.push({ name: customName, detail: "自定义记录", kcal: Math.round(customKcal) });
  }
  selectedFoods.forEach((index) => {
    const food = foodData[index];
    getDayRecord().foods.push({
      name: food.name,
      detail: `${qty} 份，${food.serving}`,
      kcal: caloriesForFood(food, qty)
    });
  });
  if (!customKcal && !customName && !selectedFoods.length) {
    const firstVisible = document.querySelector("#foodMultiPicker input[type='checkbox']");
    if (firstVisible) {
      const food = foodData[Number(firstVisible.value)];
      getDayRecord().foods.push({
        name: food.name,
        detail: `${qty} 份，${food.serving}`,
        kcal: caloriesForFood(food, qty)
      });
    }
  }
  el.customFoodCalories.value = "";
  el.customFoodName.value = "";
  document.querySelectorAll("#foodMultiPicker input:checked").forEach((input) => {
    input.checked = false;
  });
  renderFoodSelectedHint();
  saveState();
  renderDailySummary();
}

function getSelectedFoodIndexes() {
  return Array.from(document.querySelectorAll("#foodMultiPicker input:checked")).map((input) => Number(input.value));
}

function renderFoodSelectedHint() {
  const count = getSelectedFoodIndexes().length;
  document.getElementById("foodSelectedHint").textContent = count
    ? `已选择 ${count} 项，点击后会一起加入今日饮食。`
    : "可一次勾选多个常见食物，份数会应用到所有勾选项。";
}

function addExercise(event) {
  event.preventDefault();
  const exercise = exerciseData[Number(el.exerciseSelect.value)];
  const minutes = Number(el.exerciseMinutes.value) || 1;
  const intensity = Number(el.intensity.value) || 1;
  const kcal = exerciseCalories(exercise, minutes, state.profile.weight, intensity);
  getDayRecord().exercises.push({
    name: exercise.name,
    detail: `${minutes} 分钟，强度修正 ${intensity}`,
    kcal
  });
  saveState();
  renderDailySummary();
}

function bindEvents() {
  document.querySelectorAll("#profileForm input, #profileForm select, #conditionChips input").forEach((input) => {
    input.addEventListener("input", () => {
      renderMetrics();
      document.getElementById("saveStatus").textContent = "有修改";
      setHeaderEditing(true);
    });
    input.addEventListener("change", renderMetrics);
  });

  document.querySelectorAll(".tab").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".tab, .tab-panel").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      document.getElementById(button.dataset.tab).classList.add("active");
    });
  });

  document.getElementById("editDataBtn").addEventListener("click", () => {
    setHeaderEditing(!document.body.classList.contains("header-editing"));
  });

  document.getElementById("saveProfileBtn").addEventListener("click", () => {
    profileFromForm();
    saveState();
    renderMetrics();
  });

  document.getElementById("resetBtn").addEventListener("click", () => {
    const ok = confirm("确定清空本地保存的档案和记录吗？");
    if (!ok) return;
    localStorage.removeItem(STORAGE_KEY);
    state = structuredClone(defaultState);
    fillForm();
    renderAll();
    saveState("已清空");
  });

  el.recordDate.addEventListener("change", () => {
    getDayRecord();
    saveState();
    renderDailySummary();
  });

  document.getElementById("foodForm").addEventListener("submit", addFood);
  document.getElementById("exerciseForm").addEventListener("submit", addExercise);
  document.getElementById("manualTotalsForm").addEventListener("submit", saveManualTotals);
  document.getElementById("clearManualTotalsBtn").addEventListener("click", clearManualTotals);
  document.getElementById("balanceHelpBtn").addEventListener("click", () => {
    const popover = document.getElementById("balanceHelp");
    popover.hidden = !popover.hidden;
  });
  el.foodPickerSearch.addEventListener("input", renderFoodOptions);
  document.getElementById("foodMultiPicker").addEventListener("change", renderFoodSelectedHint);
  el.foodSearch.addEventListener("input", renderFoodLibrary);

  document.getElementById("foodList").addEventListener("click", deleteRecord);
  document.getElementById("exerciseList").addEventListener("click", deleteRecord);

  document.getElementById("clearFoodsBtn").addEventListener("click", () => {
    getDayRecord().foods = [];
    saveState();
    renderDailySummary();
  });

  document.getElementById("clearExercisesBtn").addEventListener("click", () => {
    getDayRecord().exercises = [];
    saveState();
    renderDailySummary();
  });
}

function saveManualTotals(event) {
  event.preventDefault();
  const record = getDayRecord();
  record.manualIntake = cleanManualNumber(el.manualIntake.value, 10000);
  record.manualExercise = cleanManualNumber(el.manualExercise.value, 5000);
  saveState();
  renderMetrics();
}

function clearManualTotals() {
  const record = getDayRecord();
  record.manualIntake = "";
  record.manualExercise = "";
  saveState();
  renderMetrics();
}

function cleanManualNumber(value, max) {
  if (value === "") return "";
  const number = Math.max(0, Math.min(max, Math.round(Number(value) || 0)));
  return String(number);
}

function deleteRecord(event) {
  const button = event.target.closest("button[data-type]");
  if (!button) return;
  const record = getDayRecord();
  const list = button.dataset.type === "food" ? record.foods : record.exercises;
  list.splice(Number(button.dataset.index), 1);
  saveState();
  renderDailySummary();
}

function renderAll() {
  el.recordDate.value = el.recordDate.value || todayKey();
  renderFoodOptions();
  renderExerciseOptions();
  renderFoodLibrary();
  renderMetrics();
}

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}

fillForm();
bindEvents();
loadPediatricBmiData().finally(renderAll);
