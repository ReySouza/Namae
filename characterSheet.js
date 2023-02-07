const data = {
   name: 'Akari Suwa',
  player: 'Pedro',
  occupation: 'Miko',
  age: 25,
  sex: 'female',
  birthplace: 'Suwa',
  points: 7,
  energy: 12,
  season: 12,

  life: {
    current: 12,
    max: 36,
  },

  sanity: {
    current: 15,
    max: 24,
  },

  stamina: {
    current: 4,
    max: 11,
  },

   mana: {
    current: 24,
    max: 24,
  },

  weapons: [
    {
      name: 'Gohei',
      type: 'Outro',
      damage: '1d6',
      attack: 'Dex-1',
    },
    {
      name: 'Ofuda',
      type: 'Ofuda',
      damage: '2d6-1',
      attack: 'Dex',
    },
     {
      name: 'Sai',
      type: 'Sai',
      damage: '2d6+3',
      attack: 'Dex-3',
    },
  ],

  attributes: [
    {
      type: 'Força',
      amount: 10,
    },
    {
      type: 'Dextreza',
      amount: 11,
    },
    {
      type: 'Inteligência',
      amount: 12,
    },
    {
      type: 'Saúde',
      amount: 11,
    },
    {
      type: 'Vontade',
      amount: 12,
    },
    {
      type: 'Percepção',
      amount: 12,
    },
    {
      type: 'Carisma',
      amount: 10,
    },
    {
      type: 'Intimidação',
      amount: 12,
    },
    {
      type: 'Parry',
      amount: 11,
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
      name: 'Tato Aguçado (+3)',
      cost: 9,
      description: '+3 em testes que envolvam o tato',
    },
      {
      name: 'Audição Aguçada (+2)',
      cost: 6,
      description: '+2 em testes que envolvam a audição',
    },
      {
      name: 'Ambidestria',
      cost: 10,
      description: 'Pode realizar testes com as duas mãos sem modificador de -4',
    },
      {
      name: 'Bloqueio Ampliado',
      cost: 5,
      description: '+1 em testes de bloqueio com escudo ou parry',
    },
      {
      name: 'Samjña',
      cost: 5,
      description: 'Ao suceder em um teste de HT, pode utilizar Esoterica para conjurar habilidades sazonais',
    },
      {
      name: 'Médium',
      cost: 5,
      description: '+1 em teste para localizar e se comunicar com espíritos que habitam em lugares, pessoas e objetos',
    },
      {
      name: 'Iaijutsu',
      cost: 0,
      description: '+1 em testes de linguagem corporal, uso de sai e saques rápidos com armas de uma ou duas mãos',
    },
      {
      name: 'Hipoalgia',
      cost: 6,
      description: '+3 para evitar quedas e resistir a dor física',
    },
      {
      name: 'Sentido de Vibração',
      cost: 8,
      description: 'Você consegue detectar o tamanho e a localização de algo a partir de vibrações captadas pela sua pele',
    },
  ],
        expertise2: [
    {
      name: '秘伝  ~ Shintai',
      type: 'Esoterica',
      cost: 0,
      damage: 0,
      time: '4 horas',
      duration: '12 horas',
      description: 'Durante 12 horas, você pode tornar qualquer objeto sagrado, isto fará com que o objeto passe a gerar Esoterica',
    },
    {
      name: '神祭  ~ Dança de Medoteko',
      type: 'Esoterica',
      cost: 3,
      damage: '3d6+5',
      time: '1 turno',
      duration: '1 turno',
      description: 'Você molda rochas no formato de onbashiras que então podem ser arremessadas com DEX-1, as onbashiras ficam fincadas no chão até que você as erga',
    },
    {
      name: '奥義  ~ Ritual de caça de misayama',
      type: 'Esoterica',
      cost: 4,
      damage: '4d6+2',
      time: 'até 1 hora',
      duration: 'indefinido',
      description: 'Você pode ser possuído por um espírito divino a qual você tenha entrado em contato, esta habilidade também permite que você invoque as vinhas de Wisteria, a arma sagrada do templo de Suwa',
    },
   {
      name: '彼岸剣  ~ Desilusão Corpórea',
      type: 'Esoterica',
      cost: '3 por clone',
      damage: 0,
      time: '1 turno',
      duration: '3 turnos',
      description: 'Sua metade fantasma pode se duplicar em até 4 vezes e assumir a sua forma, os clones terão acesso ao seu arsenal de armas, mas não suas habilidades, eles irão copiar todos os seus movimentos com um leve atraso',
    },
   {
      name: '修羅剣  ~ Obsessão com o mundo presente',
      type: 'Esoterica',
      cost: 3,
      damage: 0,
      time: '1 turno',
      duration: 'até o alvo se libertar',
      description: 'Sua metade fantasma é capaz de possuir e tomar o corpo de um alvo, este alvo deve realizar um teste de VON para evitar a possessão, ele repetirá o teste no fim de cada turno caso falhar ',
    },
      {
      name: '裏土曜  ~ 3 Kons, 7 Hakus',
      type: 'Sazonal',
      cost: '2 por turno',
      damage: 0,
      time: '1 turno',
      duration: 'depende',
      description: 'As chamas em suas costas criam uma aura de decadência e apodrecimento em torno de você, esta aura reduzirá o dano de qualquer ataque que passar por ela por 1d6, além disso, itens de ferro que atravessarem a aura começarão a enferrujar. Durante o doyo, você poderá destacar ela de seu corpo e posicionar ela em algum outro ponto, durante as monsões, esta habilidade também reduzirá seus ataques',
    },
       {
      name: '裏土曜  ~ Migração das borboletas de Makai',
      type: 'Sazonal',
      cost: 1,
      damage: '4d6 (+1d6)',
      time: '1 turno',
      duration: '1d6+1',
      description: 'As chamas em suas costas se transformam em borboletas vermelhas que voam até o alvo, ele deve suceder em um teste de dificuldade 12 ou tomará 4d6 de dano, ou metade em caso de sucesso. Ao seu comando, as borboletas podem permanecer no alvo e drenar sua energia sazonal, durante a duração do ataque, ele não poderá usar habilidades sazonais e tomará 1d6 por turno. Durante o doyou, o teste será substituido pelo teste de um atributo de sua preferencia, durante as monsões, você não terá controle sobre a direção das borboletas',
    },
      {
      name: '裏土曜  ~ Destino ligado por cedros',
      type: 'Sazonal',
      cost: 4,
      damage: '2d6+3',
      time: '1 turno',
      duration: '1d6+1',
      description: 'Raízes de árvore quebradiças e podres começarão a surgir do solo, qualquer inimigo em até 20ft a sua frente tomará 2d6+3 das raízes, ele deve suceder em um teste de DEX ou ficará imobilizado por 1d4 turnos. Durante o doyou, você poderá afetar qualquer criatura em um raio de 30ft ao seu redor, durante as monsões, você poderá escolher apenas um alvo',
    },
     {
      name: '裏土曜  ~ Perca de Vitalidade',
      type: 'Sazonal',
      cost: '1',
      damage: 0,
      time: '1 turno',
      duration: '1 turno',
      description: ' Você drena a energia da estação local para você e seus companheiros podendo gerar: 1d6 de energia sazonal, 2d6 de pontos de fatiga e 3d6 de esoterica/youjutsu, durante 2d6 turnos, a área ficará sem qualquer estação, durante o doyo, aumente 1d6 para cada um destes dados, durante as monsões, diminua 1d6',
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
        <td>${expertise2.description}</td>
    </tr>`)
  $('table#expertise2').append(newexpertise2)
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
