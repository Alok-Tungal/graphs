const labels = [
'Product Dev Roadmap','MVP','Tech Adoption','UX',
'Product Mkt Fit','Revenue Model','Sales & Mktg',
'Min Viable Regret','User Adoption','Tech Integration',
'Design Flaws','PMF Mirage','Team Dynamics','Burn Rate'
];

const values = [900,850,950,800,870,820,780,800,700,650,500,750,350,300];

const colors = [
'#9B59B6','#2980B9','#1ABC9C','#F1C40F','#E67E22','#E74C3C','#FF69B4',
'#8E44AD','#154360','#117A65','#7D6608','#784212','#1B2631','#27AE60'
];

const data = {
labels: labels,
datasets: [{
data: values,
backgroundColor: colors
}]
};

new Chart(document.getElementById("polarChart"),{
type: "polarArea",
data: data
});