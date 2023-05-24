import { UiParagraph } from "@/ui-elements/ui-paragraph/ui-paragraph";
import { UiAccent } from "@/ui-elements/ui-accent/ui-accent";
import { FC } from "react";
import { Color } from "@/types/color";

const CommentParagraph1: FC = () => (
  <>
    <UiParagraph>“Продукт гениальный! Обучение по нему - огонь!</UiParagraph>
    <UiParagraph>
      С точки зрения ux/ui по данной системе - вообще супер!
    </UiParagraph>
    <UiParagraph>
      Я в восторге! Маленькие недочеты, которые я заметила, направила в
      комментариях по курсу. Но они не меняют моего отношения к продукту в
      целом!
    </UiParagraph>
    <UiParagraph>
      То что делает наша команда -{" "}
      <UiAccent color={Color.greenMain}>
        это супер-гениально и актуально.
      </UiAccent>
      ”
    </UiParagraph>
  </>
);

const CommentParagraph2: FC = () => (
  <>
    <UiParagraph>
      “Единая система технической поддержки и единое обучение всем продуктам
      экономит{" "}
      <UiAccent color={Color.greenMain}>
        до 10 часов рабочего времени экономит ежемесячно.
      </UiAccent>
      “
    </UiParagraph>
  </>
);

const CommentParagraph3: FC = () => (
  <>
    <UiParagraph>
      “Один человек ведет заявку по всем процессам: заводит заявку, планирует в
      маршрут, отслеживает, контролирует отклонения, ведет документооборот-все
      происходит в одной системе.
    </UiParagraph>
    <UiParagraph>
      <UiAccent color={Color.greenMain}>
        Это дает экономию 100-200 тыс. рублей.“
      </UiAccent>
    </UiParagraph>
  </>
);

const CommentParagraph4: FC = () => (
  <>
    <UiParagraph>
      “Все заявки находятся в одной системе, есть интеграция с ati.su и другими
      популярными системами.
    </UiParagraph>
    <UiParagraph>
      Поэтому на поиск заявки{" "}
      <UiAccent color={Color.greenMain}>
        уходит 3-10 раз меньше времени.
      </UiAccent>{" "}
      “
    </UiParagraph>
  </>
);

export const commentsData = [
  CommentParagraph1,
  CommentParagraph2,
  CommentParagraph3,
  CommentParagraph4,
];
