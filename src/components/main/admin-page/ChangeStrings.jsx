import React from "react";
import $ from "jquery";

function ChangeStrings({onValueInput, onKeyInput, text, key, value, onNewKeyLanguageChange, submitHandler}) {
  return (
    <>
      <div className="text-center">
        <form>
          <label className="form-group">
            <span>Изменить текст</span>
            <input
              value={key}
              onChange={(e) => onKeyInput(e.target.value)}
              className="form-control"
              type="text"
              placeholder="ключ"
            />
            <textarea
              value={value}
              onChange={(e) => onValueInput(e.target.value)}
              className=" mt-2 form-control"
              cols=""
              rows="3"
              placeholder="новый текст ключа"
             />
            <select
              defaultValue={"DEFAULT"}
              className=" mt-2 form-control"
              onChange={(e) => onNewKeyLanguageChange(e.target.value)}
            >
              <option value="DEFAULT" disabled>
                Язык
              </option>
              <option value="ua">ua</option>
              <option value="ru">ru</option>
              <option value="en">en</option>
            </select>
            <button
              onClick={submitHandler}
              className="btn btn-primary mt-2"
            >
              Изменить
            </button>
          </label>
        </form>
      </div>
      <div>
        <button
          onClick={() => $(".language-text").slideToggle()}
          className="mx-auto mb-3 d-block btn btn-success"
        >
          Cписок ключей &nbsp; &#x2193;
        </button>
        <pre className="language-text">{`
    СТРАНИЦА ПОИСКА: {
      complete_field_warning: ${text.complete_field_warning},
      limit_warning_unauthorized: ${text.limit_warning_unauthorized},
      limit_warning_authorized: ${text.limit_warning_authorized},
      intro_header: ${text.intro_header},
      intro_subheader: ${text.intro_subheader},
      intro_header__input_placeholder: ${text.intro_header__input_placeholder},
      intro_header__input_substring: ${text.intro_header__input_substring},
      intro_header_btn_check: ${text.intro_header_btn_check},
      intro_header_desc_item_1: ${text.intro_header_desc_item_1},
      intro_header_desc_item_2: ${text.intro_header_desc_item_2},
      intro_header_desc_item_3: ${text.intro_header_desc_item_3},
      intro_header_desc_item_4: ${text.intro_header_desc_item_4},
      price_block_header: ${text.price_block_header},
      price_block_subheader: ${text.price_block_subheader},
      price_block_card_1_sum: ${text.price_block_card_1_sum},
      price_block_card_2_sum: ${text.price_block_card_2_sum},
      price_block_card_3_sum: ${text.price_block_card_3_sum},
      price_block_card_1_header: ${text.price_block_card_1_header},
      price_block_card_2_header: ${text.price_block_card_2_header},
      price_block_card_3_header: ${text.price_block_card_3_header},
      price_block_card_1_string_1: ${text.price_block_card_1_string_1},
      price_block_card_1_string_2: ${text.price_block_card_1_string_2},
      price_block_card_1_string_3: ${text.price_block_card_1_string_3},
      price_block_card_2_string_1: ${text.price_block_card_2_string_1},
      price_block_card_2_string_2: ${text.price_block_card_2_string_2},
      price_block_card_2_string_3: ${text.price_block_card_2_string_3},
      price_block_card_3_string_1: ${text.price_block_card_3_string_1},
      price_block_card_3_string_2: ${text.price_block_card_3_string_2},
      price_block_card_3_string_3: ${text.price_block_card_3_string_3},
      price_block_card_currency: ${text.price_block_card_currency},
      price_block_card_btn: ${text.price_block_card_btn},
      consultation_block_header: ${text.consultation_block_header},
      consultation_block_subheader: ${text.consultation_block_subheader},
      consultation_block_btn: ${text.consultation_block_btn}
    },
    FOOTER: {
      footer_btn: ${text.footer_btn},
      company_information: ${text.company_information},
      footer_phone: ${text.footer_phone},
      footer_list_item_1: ${text.footer_list_item_1},
      footer_list_item_2: ${text.footer_list_item_2},
      footer_list_item_3: ${text.footer_list_item_3},
      footer_list_item_4: ${text.footer_list_item_4},
      footer_text: ${text.footer_text}
    },
    HEADER: {
      header_vin_item: ${text.header_vin_item},
      header_reviews_item: ${text.header_reviews_item},
      header_full_constructor_item: ${text.header_full_constructor_item},
      header_blog_item: ${text.header_blog_item},
      header_enter_item: ${text.header_enter_item},
      header_exit_item: ${text.header_exit_item},
      header_home_item: ${text.header_home_item},
      header_btn_call: ${text.header_btn_call}
    },
    СТРАНИЦА ЛОГИНА: {
      nav_item_sign_in: ${text.nav_item_sign_in},
      nav_item_sign_up: ${text.nav_item_sign_up},
      email_label: ${text.email_label},
      password_label: ${text.password_label},
      login_label: ${text.login_label},
      email_sublabel: ${text.email_sublabel}
    },
    СТРАНИЦА РЕЗУЛЬТАТА: {
      error_submessage: ${text.error_submessage},
      error_link: ${text.error_link},
      error_link_btn_title: ${text.error_link_btn_title},
      error_message: ${text.error_message},
      result_page_header: ${text.result_page_header},
      result_page_cards_block_header: ${text.result_page_cards_block_header},
      result_page_card_1_price: ${text.result_page_card_1_price}
      result_page_card_2_price: ${text.result_page_card_2_price}
      result_page_card_3_price: ${text.result_page_card_3_price}
      result_page_card_1_header: ${text.result_page_card_1_header},
      result_page_card_2_header: ${text.result_page_card_2_header},
      result_page_card_3_header: ${text.result_page_card_3_header},
      price_block_card_3_base: ${text.price_block_card_3_base},
      price_block_card_currency: ${text.price_block_card_currency},
      price_block_card_report_link: ${text.price_block_card_report_link},
      price_block_card_btn_buy: ${text.price_block_card_btn_buy},
      title_total_weight: ${text.title_total_weight},
      title_own_weight: ${text.title_own_weight},
      title_car_code: ${text.title_car_code},
      title_car_number: ${text.title_car_number},
      title_all_similar_offers: ${text.title_all_similar_offers},
      title_month_similar_offers: ${text.title_month_similar_offers},
      title_week_similar_offers: ${text.title_week_similar_offers},
      title_state_register: ${text.title_state_register},
      title_arithmetic_mean: ${text.title_arithmetic_mean},
      title_inter_quartile_mean: ${text.title_inter_quartile_mean},
      title_outbid_owner: ${text.title_outbid_owner},
      title_theft_database: ${text.title_theft_database},
      title_registration_policies: ${text.title_registration_policies}
    },
    АНИМАЦИЯ ПРИ ПОИСКЕ: {
        search_animation_text_1: ${text.search_animation_text_1},
        search_animation_text_2: ${text.search_animation_text_2},
        search_animation_text_3: ${text.search_animation_text_3},
        search_animation_text_4: ${text.search_animation_text_4},
      },
    `}</pre>
      </div>
    </>
  );
}

export default ChangeStrings;
