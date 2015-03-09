class Circle
  def initialize(radius)
    @radius=radius
    @pi=Math::PI
  end

  def circumference
    2 * (@pi) * @radius
    x = puts @radius
  end

  def area
    (@pi * @radius) ** 2
    x = puts @radius * 2
  end
end

circ=Circle.new(4)
circ.circumference
circ.area