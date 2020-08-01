class Musician
  def initialize(name, instrument, song)
    @name=name
    @instrument=instrument
    @song=song
  end

  def introduction
    p "My name is #{@name}, and I will perform #{@song} for you on my #{@instrument}."
  end

  def backhanded_compliment
    p "Before I begin, I'd like to say that you look very distinguished for an #{@song}." if @name == "Neil Young"
    p "Before I begin, I'd like to say that your toupe looks resilient enough not to go #{@song}." if @name == "Bob Dylan"
    p "Before I begin, I want to say that I think it's cool that you refer to the growth sprouting on your back as a #{@song}." if @name == "Jimi Hendrix"
  end
end

neil=Musician.new("Neil Young","Martin D-45","Old Man")
neil.introduction
neil.backhanded_compliment

bob=Musician.new("Bob Dylan","Martin OO-21","Blowin' in the Wind")
bob.introduction
bob.backhanded_compliment

jimi=Musician.new("Jimi Hendrix","Fender Stratocaster","Little Wing")
jimi.introduction
jimi.backhanded_compliment
