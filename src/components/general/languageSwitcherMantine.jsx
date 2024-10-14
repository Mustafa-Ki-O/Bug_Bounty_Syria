import { useState } from "react";
import { UnstyledButton, Menu, Image, Group, Tooltip } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import classes from "../../assets/css/LanguagePicker.module.css";
import syria from "../../assets/vectors/syria_round_icon_64.png";
import england from "../../assets/vectors/united_kingdom_round_icon_64.png";
import { useTranslation } from "react-i18next";

export function LanguagePicker() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (item) => {
    setSelected(item);
    localStorage.setItem("lang", item.value);
    i18n.changeLanguage(item.value);
  };

  const data = [
    { label: t("English"), image: england, value: "en" },
    { label: t("Arabic"), image: syria, value: "ar" },
  ];

  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(data[0]);

  const items = data.map((item) => (
    <Menu.Item
      onClick={() => handleLanguageChange(item)}
      key={item.label}
      value={item.value}
      className={classes.menuItem}
    >
      <Tooltip label={item.label} color="#b21222">
        <Image src={item.image} width={18} height={18} />
      </Tooltip>
    </Menu.Item>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
      withinPortal
      p={10}
    >
      <Menu.Target>
        <UnstyledButton
          w="fit-content"
          className={classes.control}
          data-expanded={opened || undefined}
        >
          <Group gap="xs">
            <Image src={selected.image} width={22} height={22} />
          </Group>
          <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
}
