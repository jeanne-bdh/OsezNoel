<?php

namespace App\Entity;

use App\Repository\ThemeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ThemeRepository::class)]
class Theme
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 50)]
    private ?string $name = null;

    /**
     * @var Collection<int, calendar>
     */
    #[ORM\OneToMany(targetEntity: calendar::class, mappedBy: 'theme')]
    private Collection $calendar;

    public function __construct()
    {
        $this->calendar = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection<int, calendar>
     */
    public function getCalendar(): Collection
    {
        return $this->calendar;
    }

    public function addCalendar(calendar $calendar): static
    {
        if (!$this->calendar->contains($calendar)) {
            $this->calendar->add($calendar);
            $calendar->setTheme($this);
        }

        return $this;
    }

    public function removeCalendar(calendar $calendar): static
    {
        if ($this->calendar->removeElement($calendar)) {
            // set the owning side to null (unless already changed)
            if ($calendar->getTheme() === $this) {
                $calendar->setTheme(null);
            }
        }

        return $this;
    }
}
