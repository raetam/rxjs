defmodule Deliveries do
  def t1(data) do
    of(data)
    |> delay(3000)
    |> log
  end
end
