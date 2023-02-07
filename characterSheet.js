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
      cost: '3',
      damage: 0,
      time: '1 turno',
      duration: '1 turno',
      description: 'Você abençoa até 3 criaturas, a próxima vez que eles fizerem um teste ou ataque, eles podem jogar um d4 e subtrair do resultado do teste ou utilizar como modificador positivo. Eles podem fazer isso até depois do Yama falar o modificador',
    },
   {
      name: 'Reverberação de Heian-Kyo',
      type: 'Youjutsu',
      cost: 4,
      damage: 4d6,
      time: '1 turno',
      duration: '1 turno',
      description: 'A biwa emite um grito estridente que afeta até 3 criaturas, elas devem realizar um teste de força e tomar 4d6 de dano se falharem ou metade no caso de sucesso',
    },
      {
      name: 'Ira da Tormenta',
      type: 'Youjutsu',
      cost: '2',
      damage: 2d6+5,
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
