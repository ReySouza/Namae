const data = {
   name: 'Namae no Nai',
  player: 'Venturini',
  occupation: 'Vagabundo',
  age: 7,
  sex: 'male',
  birthplace: 'Heian-kyo',
  points: 1,
  energy: 11,
  season: 4,
  focus: 1,

  life: {
    current: 16,
    max: 50,
  },

  sanity: {
    current: 24,
    max: 24,
  },

  stamina: {
    current: 1,
    max: 15,
  },

   mana: {
    current: 44,
    max: 46,
  },

  weapons: [
    {
      name: 'Biwa',
      type: 'Outro',
      damage: '2d6+4',
      attack: 'IQ',
    },
    {
      name: 'Wakizachi',
      type: 'Wakizachi',
      damage: '2d6+4',
      attack: 'Dex-2',
    },
  ],

  attributes: [
    {
      type: 'Força',
      amount: 10,
    },
    {
      type: 'Dextreza',
      amount: 12,
    },
    {
      type: 'Inteligência',
      amount: 11,
    },
    {
      type: 'Saúde',
      amount: 10,
    },
    {
      type: 'Vontade',
      amount: 11,
    },
    {
      type: 'Percepção',
      amount: 10,
    },
    {
      type: 'Carisma',
      amount: 14,
    },
    {
      type: 'Intimidação',
      amount: 10,
    },
    {
      type: 'Parry',
      amount: 12,
    },
    {
      type: 'Bloqueio',
      amount: 13,
    },
    {
      type: 'Esquiva',
      amount: 10,
    },
  ],

    expertise: [
    {
      name: 'Cerimonia Secreta',
      cost: 6,
      description: '+1 para jogada de cada jogador ao combinar habilidades sazonais',
    },
      {
      name: 'Visão Noturna',
      cost: 1,
      description: 'Ignora -1 dos modificadores negativos do escuro',
    },
      {
      name: 'Talento Vocal',
      cost: 10,
      description: 'Sua voz sempre será naturalmente clara, ressonante e atrativa, ganha +2 em testes relacionados a performance, diplomacia, canção e mimica',
    },
      {
      name: 'Benção',
      cost: 8,
      description: 'Recebe visões e orientação de algum deus que você acreditar, estas visões podem demorar até 1h para se concretizarem e irão lhe custar 10 pts de fatiga',
    },
      {
      name: 'Samjña',
      cost: 5,
      description: 'Ao suceder em um teste de HT, pode utilizar Esoterica para conjurar habilidades sazonais',
    },
      {
      name: 'Ambidestria',
      cost: 10,
      description: 'Pode usar as duas mãos para atacar com o mesmo valor de dextreza',
    },
      {
      name: 'Reflexo de Combate',
      cost: 5,
      description: '+1 em jogadas de Parry, Esquiva e Bloqueio, +2 para verificação de pânico e +6 para acordar',
    },
      {
      name: 'Bloqueio Ampliado',
      cost: 5,
      description: '+1 para bloqueio com escudo e parry',
    },
      {
      name: 'Audição Aguçada',
      cost: 3,
      description: 'Você recebe +1 para testes de percepção que envolvam audição',
    },
      {
      name: 'Venturoso',
      cost: 9,
      description: '+1 para testes de habilidade quando ele correr um risco desnecessário. Você pode repetir testes que resultam em falha crítica quando você estiver se arriscando',
    },
      {
      name: 'Heikejutsu',
      cost: 0,
      description: '+1 em testes de performance, +1 em linguagem corporal, +1 em teologia budista, +1 para conjurar feitiços, +2 para ler e recitar sutras',
    },
      {
      name: 'Modulação Vocal',
      cost: 0,
      description: 'A Música que você toca, e o som da sua voz pode ser modulado de acordo com sua vontade, você pode simular outros instrumento e se suceder em um teste de IQ pode simular o timbre da voz de outras pessoas',
    },
  ],
        expertise2: [
    {
      name: '妖術 ~ Tomar Forma',
      type: 'Youjutsu',
      cost: 6,
      damage: 0,
      time: '1 turno',
      duration: 'Instantâneo',
      description: 'Você pode alternar livremente entre sua forma Youkai e uma forma humana, a sua forma humana será socialmente aceita e aparecerá com a biwa acorrentada ao seu pescoço. Você pode também assumir uma forma humana qualquer ao suceder em um teste de VON',
    },
    {
      name: '怨霊 ~ Hoichi-sem-orelhas',
      type: 'Youjutsu',
      cost: 4,
      damage: '3d6',
      time: '1 turno',
      duration: '2 turnos',
      description: 'Você conjura uma maldição em um alvo, ele deve suceder em um teste de IQ ou tomará 3d6 de dano, para cada dado acima de 4, ele receberá um modificador de -1 para seu próximo teste',
    },
    {
      name: 'Gritos desesperadores de um itsumade',
      type: 'Youjutsu',
      cost: 4,
      damage: '3d6',
      time: '1 turno',
      duration: '1 turno',
      description: 'Você emitirá o grito de um itsumade na direção de uma criatura, esta criatura deve fazer um teste de VON, se falhar, ela irá tomar 3d6 de dano e deve usar sua reação para se afastar de você',
    },
   {
      name: 'Biwa Eufórica',
      type: 'Youjutsu',
      cost: 3,
      damage: 0,
      time: '1 turno',
      duration: '1 turno',
      description: 'Você abençoa até 3 criaturas, a próxima vez que eles fizerem um teste ou ataque, eles podem jogar um d4 e subtrair do resultado do teste ou utilizar como modificador positivo. Eles podem fazer isso até depois do Yama falar o modificador',
    },
   {
      name: 'Reverberação de Heian-Kyo',
      type: 'Youjutsu',
      cost: 4,
      damage: '4d6',
      time: '1 turno',
      duration: '1 turno',
      description: 'A biwa emite um grito estridente que afeta até 3 criaturas, elas devem realizar um teste de força e tomar 4d6 de dano se falharem ou metade no caso de sucesso',
    },
      {
      name: 'Ira da Tormenta',
      type: 'Youjutsu',
      cost: 2,
      damage: '2d6+5',
      time: '1 turno ou 1 reação',
      duration: '1 turno ou 1 reação',
      description: 'Você eletrifica sua lâmina e a usa para parar um ataque. Ao suceder em um parry, você substitui o dano de sua arma por 2d6+5 de dano elétrico, caso falhe, você pode escolher dar metade do dano para a criatura ou reduzir o dano que você tomará por esta quantidade',
    },
       {
      name: '裏秋 ~ Rota Proibida aos Homens',
      type: 'Sazonal',
      cost: 1,
      damage: '1d6 (+2d6)',
      time: '1 turno',
      duration: '1 turno',
      description: 'Você forma uma corrente diagonal que parte das montanhas, os alvos afetados tomarão 1d6 de dano caso falhem em um teste de DEX, falhando ou sucedendo, logo em seguida, eles tomarão 2d6 de dano por folhas cortantes. Se feito próximo de desfiladeiros ou encostas de montanhas, rochas podem se mover e dar 1d6 de dano. Durante o outono, o vento atingirá apenas inimigos e os testes deles serão feitos com -2, durante a primavera, o vento irá se restringir a apenas 2 alvos',
    },
      {
      name: '裏秋 ~ Festival de Higan',
      type: 'Sazonal',
      cost: 3,
      damage: '1d6',
      time: '1 turno',
      duration: '3 turnos',
      description: 'Criaturas mortas irão criar aureolas laranjas em suas cabeças, cada criatura irá lhe dar 1d6 de dano extra, após 3 turnos, elas irão se tornar pó',
    },
     {
      name: '裏秋 ~ Pesadelo em Heian-Kyo',
      type: 'Sazonal',
      cost: '3',
      damage: '4d6+2',
      time: '1 turno',
      duration: '1 turno',
      description: 'Sua forma é envolvida em nuvens negras, uma descarga elétrica é emitida quando as nuvens se rompem, acertando um alvo, ele deve fazer um teste de DEX, tomando 4d6+2 de dano ao falhar ou metade em caso de sucesso',
    },
       {
      name: '裏秋 ~ Prosseção do Deus da Montanha',
      type: 'Sazonal',
      cost: '3',
      damage: '4d6+2',
      time: '1 reação',
      duration: '1 reação',
      description: 'Ao receber um ataque, você pode gastar sua reação e se transformar em um amontoado de folhas, estas folhas logo sopram e você pode reaparecer em até 10ft de onde estava',
    },

  ],
   
}

data.weapons.map((weapon, index) => {
  addWeaponToTable(weapon, index)
})

data.expertise.map((expertise, index) => {
   addExpertiseToTable(expertise, index)
})

data.expertise2.map((expertise2, index) => {
   addExpertise2ToTable(expertise2, index)
})

data.attributes.map((attribute, index) => {
  addAttribute(attribute, index)
})

$('#name').val(data.name)
$('#player').val(data.player)
$('#occupation').val(data.occupation)
$('#age').val(data.age)
$('#sex').val(data.sex)
$('#birthplace').val(data.birthplace)
$('#points').val(data.points)
$('#energy').val(data.energy)
$('#season').val(data.season)
$('#focus').val(data.focus)

$('.lifeBar').css('width', `${calculateBar(data.life.current, data.life.max)}%`)
$('#lifeCount').text(`${data.life.current}/${data.life.max}`)
$('#lifeCurrent').val(data.life.current)
$('#lifeMax').val(data.life.max)

$('.sanityBar').css('width', `${calculateBar(data.sanity.current, data.sanity.max)}%`)
$('#sanityCount').text(`${data.sanity.current}/${data.sanity.max}`)
$('#sanityCurrent').val(data.sanity.current)
$('#sanityMax').val(data.sanity.max)

$('.staminaBar').css('width', `${calculateBar(data.stamina.current, data.stamina.max)}%`)
$('#staminaCount').text(`${data.stamina.current}/${data.stamina.max}`)
$('#staminaCurrent').val(data.stamina.current)
$('#staminaMax').val(data.stamina.max)

$('.manaBar').css('width', `${calculateBar(data.mana.current, data.mana.max)}%`)
$('#manaCount').text(`${data.mana.current}/${data.mana.max}`)
$('#manaCurrent').val(data.mana.current)
$('#manaMax').val(data.mana.max)

const diceModal = $('#diceAttributes')
const lifeModal = $('#lifeModal')
const sanityModal = $('#sanityModal')
const staminaModal = $('#staminaModal')
const manaModal = $('#manaModal')

const input = document.querySelector("input");
input.addEventListener("input", function(event) {
  console.log(event.target.value);
});


$(window).click(function (event) {
  if (event.target.id == 'diceAttributes') {
    diceModal.css('display', 'none')
    $('#diceNumber').text('')
    $('#diceType').text('')

    $('.modalDice').css('transform', 'rotate(0deg)')
    $('.modalDice').css('-webkit-transform', 'rotate(0deg)')
  } else if (event.target.id == 'lifeModal') {
    lifeModal.css('display', 'none')
  } else if (event.target.id == 'sanityModal') {
    sanityModal.css('display', 'none')
  } else if (event.target.id == 'addWeaponModal') {
    closeModal('#addWeaponModal')
  } else if (event.target.id == 'addExpertiseModal') {
     closeModal('#addExpertiseModal')
  } else if (event.target.id == 'addExpertise2Modal') {
     closeModal('#addExpertise2Modal')
  } 
})

function rollAtribute(atribute, amount) {
  console.log(this)

  diceModal.css('display', 'block')

  setTimeout(() => {
    $('.modalDice').css('transform', 'rotate(360deg)')
    $('.modalDice').css('-webkit-transform', 'rotate(360deg)')
  }, 1000)

  setTimeout(() => {
    const diceNumber = rollDice('3d6')
    const diceType = calcDice(amount, diceNumber)
    $('#diceNumber').text(diceNumber)
    $('#diceType').text(diceType)

    setTimeout(() => {
      diceModal.css('display', 'none')
      $('#diceNumber').text('')
      $('#diceType').text('')

      $('.modalDice').css('transform', 'rotate(0deg)')
      $('.modalDice').css('-webkit-transform', 'rotate(0deg)')
    }, 20000)
  }, 2000)
}

$('.lifeBar').click(function () {
  console.log(this)
  lifeModal.css('display', 'block')
})

$('.sanityBar').click(function () {
  console.log(this)
  sanityModal.css('display', 'block')
})

$('.staminaBar').click(function () {
  console.log(this)
  staminaModal.css('display', 'block')
})

$('.manaBar').click(function () {
  console.log(this)
  manaModal.css('display', 'block')
})

$('#addWeapon').click(function () {
  openModal('#addWeaponModal')
})

$('#addExpertise').click(function() {
   openModal('#addExpertiseModal')
})

$('#addExpertise2').click(function() {
   openModal('#addExpertise2Modal')
})

$('#lesion').change(function () {
  if (this.checked) {
    console.log('Modo lesionamento grave ativado!')
  } else {
    console.log('Modo lesionamento grave desativado!')
  }
})

$('#possession').change(function () {
  if (this.checked) {
    console.log('Modo possessão ativado!')
  } else {
    console.log('Modo possessão desativado!')
  }
})

$('#dying').change(function () {
  if (this.checked) {
    console.log('Modo morrendo ativado!')
  } else {
    console.log('Modo morrendo desativado!')
  }
})

$('#traumatized').change(function () {
  if (this.checked) {
    console.log('Modo traumatizado ativado!')
  } else {
    console.log('Modo traumatizado desativado!')
  }
})

$('#crazed').change(function () {
  if (this.checked) {
    console.log('Modo enlouquecido ativado!')
  } else {
    console.log('Modo enlouquecido desativado!')
  }
})

$('#addWeaponForm').submit(function (event) {
  var weaponType = ''

  if ($('#weaponType').val() == 'fire') {
    weaponType = 'Fogo'
  } else if ($('#weaponType').val() == 'arch') {
    weaponType = 'Arco'
  } else if ($('#weaponType').val() == 'fight') {
    weaponType = 'Briga'
  }

  const weapon = {
    name: $('#weaponName').val(),
    type: weaponType,
    damage: $('#weapondamage').val(),
    attack: $('#weaponAttack').val(),
  }

  data.weapons.push(weapon)
  const id = data.weapons.length - 1
  addWeaponToTable(weapon, id)

  closeModal('#addWeaponModal')
  event.preventDefault()
})

$('#addExpertiseForm').submit(function (event) {
  var expertiseCost = ''

  if ($('#expertiseCost').val() == 1) {
    expertiseCost = 1
  } else if ($('#expertiseCost').val() == 2) {
    expertiseCost = 2
  } else if ($('#expertiseCost').val() == 3) {
    expertiseCost = 3
  }

  const expertise = {
    name: $('#expertiseName').val(),
    cost: $('#expertiseCost').val(),
    description: $('#expertiseDescription').val(),
  }

  data.expertise.push(expertise)
  const id = data.expertise.length - 1
  addExpertiseToTable(expertise, id)

  closeModal('#addExpertiseModal')
  event.preventDefault()
})

$('#addExpertise2Form').submit(function (event) {
  var expertise2Type = ''

  if ($('#expertise2Type').val() == 'seasonal') {
    expertise2Type = 'Sazonal'
  } else if ($('#expertise2Type').val() == 'esoterica') {
    expertise2Type = 'Esoterica'
  } else if ($('#expertise2Type').val() == 'youjutsu') {
    expertise2Type = 'Youjutsu'
  }

  const expertise2 = {
    name: $('#expertise2Name').val(),
    type: $('#expertise2Type').val(),
    cost: $('#expertise2Cost').val(),
    damage: $('#expertise2Damage').val(),
    time: $('#expertise2Time').val(),
    duration: $('#expertise2Duration').val(),
    description: $('#expertise2Description').val(),
    
  }

  data.expertise2.push(expertise2)
  const id = data.expertise2.length - 1
  addExpertise2ToTable(expertise2, id)

  closeModal('#addExpertise2Modal')
  event.preventDefault()
})

$('#changeLife').submit(function (event) {
  let current = Number($('#lifeCurrent').val())
  const max = Number($('#lifeMax').val())

  if (current > max) {
    alert('A vida atual não pode ser maior que a maxima!')
    current = max
  }

  data.life.current = current
  data.life.max = max
  $('.lifeBar').css('width', `${calculateBar(current, max)}%`)
  $('#lifeCount').text(`${current}/${max}`)

  closeModal('#lifeModal')
  event.preventDefault()
})

$('#changeSanity').submit(function (event) {
  let current = Number($('#sanityCurrent').val())
  const max = Number($('#sanityMax').val())

  if (current > max) {
    alert('A sanidade atual não pode ser maior que a maxima!')
    current = max
  }

  data.sanity.current = current
  data.sanity.max = max
  $('.sanityBar').css('width', `${calculateBar(current, max)}%`)
  $('#sanityCount').text(`${current}/${max}`)

  closeModal('#sanityModal')
  event.preventDefault()
})

  $('#changeStamina').submit(function (event) {
  let current = Number($('#staminaCurrent').val())
  const max = Number($('#staminaMax').val())

  if (current > max) {
    alert('A stamina atual não pode ser maior que a maxima!')
    current = max
  }

  data.stamina.current = current
  data.stamina.max = max
  $('.staminaBar').css('width', `${calculateBar(current, max)}%`)
  $('#staminaCount').text(`${current}/${max}`)

  closeModal('#staminaModal')
  event.preventDefault()
})

$('#changeMana').submit(function (event) {
  let current = Number($('#manaCurrent').val())
  const max = Number($('#manaMax').val())

  if (current > max) {
    alert('A mana atual não pode ser maior que a maxima!')
    current = max
  }

  data.mana.current = current
  data.mana.max = max
  $('.manaBar').css('width', `${calculateBar(current, max)}%`)
  $('#manaCount').text(`${current}/${max}`)

  closeModal('#manaModal')
  event.preventDefault()
})

function calculateBar(current, max) {
  if (current > max) {
    return 100
  } else if (current < 0) {
    return 0
  } else {
    const value = (100 / max) * current
    const string = value.toString().split('.')[0]
    const percentage = Number(string)
    return percentage
  }
}

function calcDice(ability, dice) {

  const table = [
    { normal: 18 },
    { normal: 17, good: 18 },
    { normal: 16, good: 18 },
    { normal: 15, good: 17 },
    { normal: 14, good: 17, extreme: 18 },
    { normal: 13, good: 16, extreme: 18 },
    { normal: 12, good: 16, extreme: 36 },
    { normal: 11, good: 15, extreme: 34 },
    { normal: 10, good: 15, extreme: 34 },
    { normal: 9, good: 14, extreme: 34 },
    { normal: 9, good: 14, extreme: 32 },
    { normal: 8, good: 13, extreme: 32 },
    { normal: 8, good: 13, extreme: 32 },
    { normal: 7, good: 12, extreme: 30 },
    { normal: 7, good: 12, extreme: 30 },
    { normal: 6, good: 11, extreme: 30 },
    { normal: 6, good: 11, extreme: 28 },
    { normal: 5, good: 10, extreme: 28 },
    { normal: 5, good: 10, extreme: 26 },
  ]

  const type = table[ability - 1]

  if (type.extreme) {
    if (dice >= type.extreme) return 'Falha Crítica'
    if (dice >= type.good) return 'Falha Normal'
    return 'Sucesso Normal'
  } else if (type.good) {
    if (dice >= type.good) return 'Falha'
    return 'Sucesso Normal'
  } 
  return 'Sucesso Crítico'
}

function rollDice(dice) {
  let [count, max] = dice.split('d')

  if (Number(count) && Number(max)) {
    count = Number(count)
    max = Number(max)

    let total = 0

    for (let i = 0; i < count; i++) {
      total += Math.floor(Math.random() * max + 1)
    }

    return total
  } else {
    return null
  }
}

function openModal(modal) {
  const Modal = $(modal)
  Modal.css('display', 'block')
}

function closeModal(modal) {
  const Modal = $(modal)
  Modal.css('display', 'none')
}

function addWeaponToTable(weapon, id) {
  const newWeapon = $(`<tr id="weapon_${id}">
        <td>
            <button onclick="deleteWeapon(${id})">
                <i class="fa fa-trash-o trashcan"></i>
            </button>
            ${weapon.name}
        </td>
        <td>${weapon.type}</td>
        <td>${weapon.damage}</td>
        <td>${weapon.attack}</td>
    </tr>`)
  $('table#weapons').append(newWeapon)
}

function addExpertiseToTable(expertise, id) {
  const newexpertise = $(`<tr id="expertise_${id}">
        <td>
            <button onclick="deleteExpertise(${id})">
                <i class="fa fa-trash-o trashcan"></i>
            </button>
            ${expertise.name}
        </td>
        <td>${expertise.cost}</td>
        <td>${expertise.description}</td>
    </tr>`)
  $('table#expertise').append(newexpertise)
}

function addExpertise2ToTable(expertise2, id) {
  const newexpertise2 = $(`<tr id="expertise2_${id}">
        <td>
            <button onclick="deleteExpertise2(${id})">
                <i class="fa fa-trash-o trashcan"></i>
            </button>
            ${expertise2.name}
        </td>
        <td>${expertise2.type}</td>
        <td>${expertise2.cost}</td>
        <td>${expertise2.damage}</td>
        <td>${expertise2.time}</td>
        <td>${expertise2.duration}</td>
        <td>
            <button onclick="showExpertise2Description(${id})">
                <i class="fa fa-info-circle"></i>
            </button>
        </td>
    </tr>`)
  $('table#expertise2').append(newexpertise2)
}

function showExpertise2Description(id) {
  const expertise2 = data.expertise2[id]
  $('#expertise2DescriptionTitle').text(expertise2.name)
  $('#expertise2DescriptionText').text(expertise2.description)
  $('#expertise2DescriptionModal').modal('show')
}

function addAttribute(attribute, id) {
  const newAttribute = $(`<div class="attribute" id="attribute_${id}">
    <a onclick="rollAtribute('${attribute.type}', ${attribute.amount})">
      <img class="attributeDice" src="./img/dado.png" alt="Dado">
    </a>
    <h3>${attribute.type}</h3>
    <input type="text" name="appearance" value="${attribute.amount}" id="attribute_input_${id}" disabled>
  </div>`)
  $('#attributesList').append(newAttribute)
}

function deleteWeapon(id) {
  $(`tr#${id}`).remove()
}

function deleteExpertise(id) {
  $(`tr#${id}`).remove()
}

function deleteExpertise2(id) {
  $(`tr#${id}`).remove()
}

/// Árvore de Foco

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Animation
    hamburger.classList.toggle("toggle");
});

 function convertNumber() {
      // Get the input value
      var input = document.getElementById("input").value;
      // Perform the conversion
      var output = input / 3;
      // Display the results
      document.getElementById("outputDisplay").innerHTML = "Output: " + output;
    }

function toggleSidebar() {
  var sidebar = document.getElementById("mySidebar");
  if (sidebar.style.width === "250px") {
    closeSidebar();
  } else {
    openSidebar();
  }
}

function openSidebar() {
  document.getElementById("mySidebar").style.width = "500px";
}

function closeSidebar() {
  document.getElementById("mySidebar").style.width = "0";
}

   const areas = document.querySelectorAll("area");
  const sidebar = document.getElementById("mySidebar");

  for (let area of areas) {
    area.addEventListener("click", function() {
      toggleNav();
      updateSidebarContent(area.title);
    });
  }

  function toggleNav() {
    if (sidebar.style.display === "block") {
      sidebar.style.display = "none";
    } else {
      sidebar.style.display = "block";
    }
  }

  function updateSidebarContent(title) {
    let content;
    switch (title) {
      case "A Lenda do Sino de Jetavana":
        content = "Gasto: Livre <br> Requisito: Nenhum <br> Com as mãos habilidosas e a mente agitada, O luthier trabalha, dedos entrelaçados, Criando uma biwa, obra de arte, Para preencher um espaço vazio, uma parte. Mas à medida que a noite cai e o vento começa a uivar, Uma sombra se aproxima, uma fera a rondar, E em seu rastro, a biwa treme, Como se seu coração pudesse se quebrar. Mas a sombra se aproxima e a biwa grita, Suas cordas despedaçadas, como em um pesadelo, E o coração do luthier se parte e se desfaz, Enquanto vê sua criação, sua obra-prima, em paz. A tempestade continua, a biwa cai, Sua madeira se despedaça, suas cordas emaranhadas, E o luthier cai de joelhos, Seu coração em pedaços, sua alma a descansar.";
        break;
      case "A Verdadeira Face do Deus Secreto":
        content = "Gasto: Livre <br> Requisito: Nenhum <br> No antigo Mausoléu Umebachi-Goryo, na vila destruída de Taishi, vocês fizeram uma descoberta incrivel, vocês libertaram uma nova força ao mundo, o Deus Secreto, absoluto em seu poder e supremo em sua sagacidade estará cada vez mais próximo de vocês, sintam seu poder correndo por tuas veias e vejam a natureza respirar e a energia se movimentar ";
        break;
      case "A Lendária Tapeçaria do Outono":
        content = "Gasto: 3 PF <br> Requisito: Nenhum <br> Dentre as divindades associadas ao Outono, talvez a mais prolífica seja Tatsuta-hime, a Deusa do outono e dos ventos outonescos, sua residência ficaria localizado no Mt. Tatsuta, parte das montanhas Omine. É dito que essa Deusa é extremamente habilidosa na arte da costura e que todo ano, ela costuraria as folhas de outono nas árvores e os pedaços de grama seca, formando um tapete rico que cobriria florestas inteiras, algumas fontes dizem que ela também pinta as folhas manualmente para que fiquem com os tons alaranjandos, mas ela não é muito boa nisso então as folhas terminam com as cores irregulares e mal colocadas <br> Ao comprar este foco, você ganhará 5 pontos sazonais";
        break;
      case "Deusa que pinta as folhas de laranja":
        content = "Gasto: 2 PF <br> Requisito: Nenhum <br> As celebrações associadas a Tatsuta-hime tipicamente envolvem orações para proteção contra tempestades, espíritos vingativos e para sucesso nas colheitas, em alguns lugares, as mikos que são chamadas para fazer os rituais a essa Deusa são incorporadas a própria natureza divina dela, assim se tornando avatares vivos de seu poder. Você consegue sentir o poder desta Deusa ainda que indiretamente, as chamas em suas costas se alimentam da mesma energia que ela libera ao pintar as folhas e as soprar pelo vento <br> Ao comprar este foco, você notará que o vento sempre parecerá ficar mais forte onde você está, você pode invocar uma pequena tempestade elétrica que irá pairar sobre o campo de batalha, a qualquer momento, uma descarga elétrica poderá atingir um alvo de sua escolha.";
        break;
      case "Símbolo da solidão":
        content = "Gasto: 4 PF <br> Requisito: Nenhum <br> Este foco é mutualmente exclusivo com símbolo da ancestralidade e símbolo da prosperidade<br> Para muitas pessoas, a estação do outono é uma epoca de solidão e introspecção. Conforme o mundo se aquieta e seu prepara para as longas noites de inverno, a natureza morre, este processo é visto pelo Shinto como uma parte fundamental da natureza, um lembrete de que tudo é transitório e impermanente <br> Ao comprar este foco, você poderá adicionar uma habilidade sazonal para seu Inugami, ele poderá aplicar um debuff em um alvo de sua escolha, durante 1d4 turnos, ele terá que fazer todos os testes com um modificador de -2";
        break;
      case "Símbolo da ancestralidade":
        content = "Gasto: 4 PF <br> Requisito: Nenhum <br> Este foco é mutualmente exclusivo com símbolo da prosperidade e símbolo da solidão <br> Um dos principais festivais que ocorre durante o Outono é o festival de Higan. Um feriado Budista celebrado durantes os dois equinócios que ocorrem ao longo do ano. A palavra Higan em si se refere ao outro lado do Inferno Budista, do outro lado do rio Sanzu, na margem oposta da entrada do Inferno  <br> Ao comprar este foco, você poderá criar uma aura de luto e lembranças que irá ressoar com espíritos próximos, se existir algum espírito na proximidade, ele irá atacar o alvo por você, quanto mais espíritos houverem na área, maior é a chance de que algum venha ao seu chamado ";
        break;
      case "Símbolo da prosperidade":
        content = "Gasto: 4 PF <br> Requisito: Nenhum <br> Este foco é mutualmente exclusivo com símbolo da ancestralidade e símbolo da solidão <br> O calendário tradicional utilizado pelo povo Japones é especificamente feito para auxiliar nos momentos de plantar e colher, plantar os alimentos durante a primavera para colhe-los antes do inverno é essencial para garantir que o povo não passe fome durante o inverno. <br> Ao comprar este foco, você sentirá que as chamas em suas costas irão interagir de forma mais vigorosa com o ambiente, ao seu comando, qualquer plantação ou colheita que estiver ao seu redor irá experienciar um crescimento abnormal e quase instantâneo, o efeito da colheita irá variar de cultura para cultura, algumas poderão servir de alimentos enquanto outras podem ser comercializadas";
        break;
      case "Shichiseiken e o pacto secreto":
        content = "Gasto: Livre <br> Requisito: Traduzir os documentos encontrados no Mausoléu <br><br> Finalmente o nome verdadeiro do Deus secreto foi revelado, porém ainda não é possível determinar a razão para ele estar se envolvendo com a Shichiseiken e o Principe Shotoku, é necessário investigar mais a fundo";
        break;
      case "Seguindo os rastros de um bastardo":
        content = "Gasto: 3 PF <br> Requisito: Ir para a cidade de seu mestre <br> A sua história certamente foi trágica, você poderia ter sido aceito como um tesouro oficial da corte imperial Japonesa e vivido dentro de um palácio banhado em ouro e jade, se pelo menos, o idiota do seu criador não tivesse vacilado. Já está na hora de você pagar uma bela visita a ele, se você pelo menos soubesse onde ele mora ";
        break;
      case "Dissonância Tempestuosa":
        content = "Gasto: 2 PF <br> Requisito: Nenhum <br> Tempestades talvez sejam as maiores fontes de vida e energia que existem, este poder bruto, capaz de fazer a terra estremecer e o chão ceder, é comparavel apenas com a furia de um Deus poderoso, esta dissonância, caótica, barulhenta e exilerante foi a responsável pela sua criação, você reconhece que no fim do dia, você é um filho do caos, da destruição e da mais pura e desinibida energia <br> Ao comprar este foco, você será alimentado pela eletricidade, todo dano que você receber de ataques elétricos serão cortados pela metade e podem ser convertidos em Youjutsu para você";
        break;
      case "A Biwa pristina de Benzaiten":
        content = "Gasto: 1 PF <br> Requisito: Ter a vantagem Benção ou Benção Superior <br> Este foco é mutualmente exclusivo com O Estrondoso tambor de Raijin <br> Benzaiten é a Deusa sincrética da música, das artes e da beleza. Sua origem na religião Hindu foi muito alterada quando ela chegou ao Japão, sua natureza divina foi mesclada e misturada com centenas de outros Deuses, esses outros Deuses deram dezenas de novas facetas a ela. Uma destas facetas e talvez uma das mais extraordinárias, é sua relação com o Dragão-Rei, o controlador dos céus, o governador dos mares e o Rei da Capital Lunar, a unica criatura capaz de se sentar ao lado de Amaterasu nos céus. Benzaiten foi a terceira filha do Rei Dragão, como princesa do Palácio, ela também teria o poder de controlar os mares e poderia assumir uma forma dracônica <br> Ao comprar este foco, você será guiado por Benzaiten, você possuirá maior facilidade para se comunicar com ela e dependendo da ocasião, ela poderá pessoalmente descer dos céus para fornecer apoio. Lembre de a tratar com o maior respeito e admiração";
        break;
      case "Ressonância Perfeita":
        content = "Gasto: 3 PF <br> Requisito: Leia o sutra de Lótus <br> Suas habilidades ressonam perfeitamente com Benzaiten, você se sente cada vez mais alinhado ao seu poder mágico. Você fortalece sua relação com a Deusa e se torna um Paladino em seu nome <br> Ao comprar este foco, você adquire uma habilidade a mais como recompensa por servir Benzaiten. Escolha entre Aid e Zone of Truth";
        break;
      case "Estrondoso Tambor de Raijin":
        content = "Gasto: 1 PF <br> Requisito: Ter a vantagem Benção ou Benção Superior <br> Este foco é mutualmente exclusivo com A Biwa pristina de Benzaiten <br> Raijin é um dos Deuses mais poderosos da mitologia Shinto. Ele é representado com uma face grotesca e um corpo muito musculoso. Ele é rodeado por tambores de Taiko que ele usa para criar os barulhos dos trovões. Quando nuvens negras pairam sobre o ar, este é tipicamente um sinal que Raijin pode estar tocando seus tambores no céu, cada vez que ele esmaga um de seus tambores, uma trovoada ocorre, fazendo com que a terra inteira estremeça. As condições de seu nascimento são bizarras, em algumas histórias, uma centopéia Youkai colossal chamada Oomukade está a devastar o Japão, dentro do Estômago da centopéia, Raijin nasce e logo começa a bater em seus tambores, seu poder é tão grande que a centopéia acaba sendo explodida de dentro pra fora <br> Ao comprar este foco, você terá maior facilidade para se comunicar com ele e dependendo da ocasião, ele poderá fornecer apoio diretamente. Ele possui um pávio curtissimo então não o irrite em hipotése alguma  ";
        break;
      case "Caminho de furia e poder":
        content = "Gasto: 3 PF <br> Requisito: Encontre um templo dedicado a Raijin <br> Suas habilidades se alinharam ao caos e a destruição promovido por Raijin, você se sente mais poderoso a cada trovão que ouve no céu. Você decide fortalecer sua relação com ele e se torna seu campeão <br> Ao comprar este foco, você adquire uma habilidade a mais como recompensa por servir Raijin. Escolha entre Banishing Smite e Blinding Smite";
        break;
      case "Heikejutsu":
        content = "Gasto: Livre <br> Requisito: Nenhum <br> Cada movimento que você faz, cada fôlego de vida que você toma, é parte da sua energia indo embora, você vive em uma constante corrida contra o tempo, sabendo que um dia, você deixará de existir. A partir deste ponto, tudo que você fizer precisará ser calculado e planejando, você ganhou uma oportunidade para explorar este mundo, como todos os seus horrores e belezas, não morra em vão";
        break;
      case "Gagaku-Biwa":
        content = "Gasto: 3 <br> Requisito: Nenhum <br> A Biwa Gagaku é um tipo de Biwa com 4 cordas, tipicamente tocada em palácios e templos como ambiência para os cultos e os festivais que ocorrem. Você pode se sintonizar com a música produzida com este tipo de Biwa e talvez até mesmo alterar o tipo de magia que você seria capaz de produzir <br> Ao comprar este foco, você poderá obter feitiços que só estariam disponiveis para Shintoistas";
        break;
      case "Gogen-Biwa":
        content = "Gasto: 3 <br> Requisito: Nenhum <br> A Biwa Gogen é uma variante da Biwa com 5 cordas, ela veio da China durante um período em que a corte Imperial buscava modernizar seus rituais, particularmente aqueles relacionados aos mortos. Esta Biwa foi padronizada para apresentações em templos durante 200 anos até seu sumiço repentino, agora ela é vista apenas em cemitérios. Você obtém conhecimento sobre essa antiga variante e pode customizar seu corpo para conseguir ter acesso ao seu poder <br> Ao comprar este foco, você ganhará a vantagem Médium e poderá se comunicar com espíritos mais facilmente <br>";
        break;
      case "Moso-Biwa":
        content = "Gasto: 3 <br> Requisito: Nenhum <br> A Biwa Moso é uma biwa com 4 cordas, tipicamente tocada ao som de Mantras budistas, ela possui um corpo menor e é feita com materiais mais refinados, seu afinamento também é diferente, atingindo apenas E, B, E e A. Você pode customizar o corpo de sua Biwa e talvez alterar o tipo de magia que você seria capaz de produzir <br> Ao comprar este foco, você poderá adicionar uma vantagem de conhecimento de Teologia Budista e poderá ler Sutras e entender Mandalas como se fosse um Budista iniciado ";
        break;
      case "O Grande contador de histórias":
        content = "Gasto: 2 PF <br> Requisito: Nenhum <br> Biwa-Hoshi é um nome dado para os monges que vagavam pelo Japão tocando sua Biwa, sem qualquer preocupação com o que iriam comer ou onde iriam dormir, estes homens eram tipicamente pobres e cegos, essa era a unica atividade que poderiam desenvolver nas ruas sem que fossem afugentados por donos de terras ou humilhados por Samurais que passavam pelas vilas. Estas pessoas foram extremamente importantes pois foram os responsáveis pela preservação das histórias tradicionais Japonesas, com seus instrumentos, eles recitavam os grandes epicos";
        break;
      case "Grande Patronagem":
        content = "Gasto: 1 PF <br> Requisito: Nenhum <br> Este foco é mutualmente exclusivo com Uma nova Liga <br> Apesar de serem moradores de rua, estes homens não estava inteiramente desamparados, muitos deles decidiram formar guildas e se juntar. Uma destas guildas está localizada em Kyoto, você poderia tentar se juntar";
        break;
      case "Uma Nova Liga":
        content = "Gasto: 1 PF <br> Requisito: Nenhum <br> Este foco é mutualmente exclusivo com Grande Patronagem <br> Você sabe da existência de uma pequena guilda que aceita monges e diversos outros grupos 'intocáveis', você sabe que estas organizações estão envolvidas em diversos esquemas de corrupção diferentes, os fundos gerados pela guilda são todos transferidos para os templos ou vão diretamente para os bolsos dos Samurais. Se você quiser participar de uma guilda, o melhor caminho é montar a sua própria ";
        break;
      case "Ensinamentos de um velho bardo":
        content = "Gasto: Livre <br> Requisito: Nenhum <br> Seu dono era um carpinteiro muito habilidoso, mas essa habilidade exigiu muita prática e um dedicação enorme a arte. Seu corpo é perfeito, apesar das cicatrizes de batalha, da madeira lascada e das cordas desfiadas, você ainda está muito bem conservado. ";
        break;
      case "Joruri":
        content = "Gasto: 3 PF <br> Requisito: Nenhum <br> <br> Ao comprar este foco, ";
        break;
      case "Shomyo":
        content = "Gasto: 3 PF <br> Requisito: Nenhum <br> <br>";
        break;
      case "Gagaku":
        content = "Gasto: 3 PF <br> Requisito: Nenhum <br> <br>";
        break;
      case "Hogaku":
        content = "Gasto: 3 PF <br> Requisito: Nenhum <br> <br> ";
        break;
      case "Hyakki Yagyo":
        content = "Gasto: Livre <br> Requisito: Nenhum <br> Pouco antes de vocês se encontrarem, um livro chamado Shūgaishō, cujo autor é desconhecido, continha instruções sobre como sobreviver ao Hyakki Yagyo, caso ele viesse a ocorrer. A instrução é não sair de casa em hipotése alguma e aqueles que ouvirem o desfile, devem conjurar estas palavras <br><br> KA-TA-SHI-HA-YA, E-KA-SE-NI-KU-RI-NI, TA-ME-RU-SA-KE, TE-E-HI, A-SHI-E-HI, WA-RE-SHI-KO-NI-KE-RI. Talvez seja tarde demais para isso";
        break;
      case "Maldição Celestial":
        content = "Gasto: 2 PF (Coletivo) <br> Requisito: Nenhum <br> Não é possível que tudo tenha sido uma coincidência, o roubo da Shichiseiken e o ataque em Naniwa devem estar relacionados de alguma forma, tudo foi planejado, a vinda do imperador, o fluxo de Youkais nunca vistos antes no dia do festival de Tsukimi, o festival da Lua. Alguma coisa está prestes a acontecer e vocês são os catalisadores para o cataclisma";
        break;
      case "Sutra do coração e da alma":
        content = "Gasto: 3 PF <br> Requisito: Adquirir o Orb Ultramarino <br> Hoichi sem orelhas era um antigo biwa hoshi extremamente habilidoso com seu instrumento. Um dia, ele foi chamado por um Samurai para se apresentar para seu senhor, um daimyo poderoso da epoca, a apresentação foi incrivel e ele então foi chamado para fazer a mesma apresentação no dia seguinte. Quando o Samurai se dirigiu aos seus aposentos para leva-lo ao Daimyo, ele não encontrou Hoichi, ele saiu para procurar e o encontrou tocando furiosamente em um cemitério. Percebendo que Hoichi havia sido possuido por fantasmas, o sacerdote de um templo próximo pintou o corpo de Hoichi com os kanjis do sutra do coração. Quando o samurai que agora estava possuido pelo fantasma foi interromper o exorcismo, ele viu que o corpo de Hoichi estava invisivel, exceto pelas orelhas que ele então arrancou <br> Ao comprar este foco, você poderá tentar encontrar o espírito que possuiu Hoichi e usar o orb ultramarino ";
        break;
      case "O Grande espírito vingativo de Taira":
        content = "Gasto: 2 PF <br> Requisito: Nenhum <br> Taira no Masakado teria sido um dos principais responsáveis pela crise descrita no Heike Monogatari, uma recontagem dos conflitos entre os clãs Taira e Minamoto que levaram ao fim do regime Imperial no Japão. Sua resistência ao clã Minamoto e as forças imperiais foram tão grandes que ele foi considerado um Deus para muitos que viviam na epoca. No momento de sua morte, histórias começaram a circular de que sua cabeça se ergueria de Tokyo e se deslocaria para Kyoto para conseguir vingança naqueles que o mataram, então decidiram pregar ela no tumulo <br> Ao comprar este foco, você poderá encontrar a ultima localização deste espírito e utilizar seu orb nele ";
        break;
      case "Uma nova fonte de energia":
        content = "Gasto: 1 PF <br> Requisito: Nenhum <br> Durante a sua vida inteira como um objeto independente, você esteve a procura de uma nova fonte de energia, algo que poderia lhe manter vivo indefinitivamente, este orb lhe deu essa chance, você só precisará usar ele agora";
        break;
      default:
        content = "Se você encontrou esse foco, ele está trancado (ou você achou um bug)";
    }
    sidebar.innerHTML = `
      <a href="#" class="closebtn" onclick="toggleNav()">&times;</a>
      <br></br>
      <br></br>
      <h3>${title}</h3>
      <p>${content}</p>
    `;
  }
